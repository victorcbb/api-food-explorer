import { Router } from "express"

import { usersRoutes } from "./users.routes"
import { productsRoutes } from "./products.routes"
import { authenticateRoutes } from "./authenticate.routes"
import { ingredientsRoutes } from "./ingredients.routes"

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/products", productsRoutes)
routes.use("/ingredients", ingredientsRoutes)
routes.use("/authenticate", authenticateRoutes)

export { routes }