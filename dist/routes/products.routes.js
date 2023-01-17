"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = require("../configs/upload");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const CreateProductController_1 = require("../modules/products/useCases/createProduct/CreateProductController");
const DetailsProductController_1 = require("../modules/products/useCases/detailsProduct/DetailsProductController");
const UpdateImageProductController_1 = require("../modules/products/useCases/ImageProduct/UpdateImageProductController");
const ListProductController_1 = require("../modules/products/useCases/listProduct/ListProductController");
const productsRoutes = (0, express_1.Router)();
exports.productsRoutes = productsRoutes;
const upload = (0, multer_1.default)(upload_1.MULTER);
const listProductController = new ListProductController_1.ListProductController();
const detailsProductController = new DetailsProductController_1.DetailsProductController();
const createProductController = new CreateProductController_1.CreateProductController();
const updateImageProductController = new UpdateImageProductController_1.UpdateImageProductController();
productsRoutes.get("/", listProductController.handle);
productsRoutes.get("/details/:id", detailsProductController.handle);
productsRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, createProductController.handle);
productsRoutes.patch("/image/:id", ensureAuthenticated_1.ensureAuthenticated, upload.single("image"), updateImageProductController.handle);
//# sourceMappingURL=products.routes.js.map