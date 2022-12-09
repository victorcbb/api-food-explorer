import { Router } from "express"
import { CreateProductController } from "../modules/products/useCases/CreateProductController"

const productsRoutes = Router()

const createProductController = new CreateProductController()

productsRoutes.post("/", createProductController.handle)

export { productsRoutes }