import { Router } from "express"

import { usersRoutes } from "./users.routes"
import { productsRoutes } from "./products.routes"

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/products", productsRoutes)

export { routes }