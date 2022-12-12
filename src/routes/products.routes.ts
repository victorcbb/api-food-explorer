import { Router } from "express"
import multer from "multer"
import { MULTER } from "../configs/upload"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController"
import { UpdateImageProductController } from "../modules/products/useCases/ImageProduct/UpdateImageProductController"

const productsRoutes = Router()
const upload = multer(MULTER)

const createProductController = new CreateProductController()
const updateImageProductController = new UpdateImageProductController()

productsRoutes.post("/", ensureAuthenticated, createProductController.handle)
productsRoutes.patch("/image/:id", ensureAuthenticated, upload.single("image"), updateImageProductController.handle)

export { productsRoutes }