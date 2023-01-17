"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const upload_js_1 = require("./configs/upload.js");
const index_js_1 = require("./routes/index.js");
const AppError_js_1 = require("./utils/AppError.js");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/files", express_1.default.static(upload_js_1.UPLOADS_FOLDER));
app.use(index_js_1.routes);
app.use((err, req, res, next) => {
    if (err instanceof AppError_js_1.AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        });
    }
    console.error(err);
    return res.status(500).json({
        status: "error",
        message: "internal server error"
    });
});
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
