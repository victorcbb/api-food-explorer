"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MULTER = exports.UPLOADS_FOLDER = exports.TMP_FOLDER = void 0;
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const crypto_1 = __importDefault(require("crypto"));
exports.TMP_FOLDER = path_1.default.resolve(__dirname, '..', '..', 'tmp');
exports.UPLOADS_FOLDER = path_1.default.resolve(exports.TMP_FOLDER, 'uploads');
exports.MULTER = {
    storage: multer_1.default.diskStorage({
        destination: exports.TMP_FOLDER,
        filename(req, file, callback) {
            const fileHash = crypto_1.default.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;
            return callback(null, fileName);
        }
    })
};
//# sourceMappingURL=upload.js.map