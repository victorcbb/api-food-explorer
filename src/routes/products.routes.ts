import { Router } from "express"
import multer from "multer"
import { MULTER } from "../configs/upload"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController"
import { DetailsProductController } from "../modules/products/useCases/detailsProduct/DetailsProductController"
import { UpdateImageProductController } from "../modules/products/useCases/ImageProduct/UpdateImageProductController"
import { ListProductController } from "../modules/products/useCases/listProduct/ListProductController"

const productsRoutes = Router()
const upload = multer(MULTER)

const listProductController = new ListProductController()
const detailsProductController = new DetailsProductController()
const createProductController = new CreateProductController()
const updateImageProductController = new UpdateImageProductController()

productsRoutes.get("/", listProductController.handle)
productsRoutes.get("/details/:id", detailsProductController.handle)
productsRoutes.post("/", ensureAuthenticated, createProductController.handle)
productsRoutes.patch(
  "/image/:id", 
  ensureAuthenticated, 
  upload.single("image"), 
  updateImageProductController.handle
)

export { productsRoutes }