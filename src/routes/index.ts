import { Router } from "express"

import { usersRoutes } from "./users.routes"
import { productsRoutes } from "./products.routes"
import { requestsRoutes } from "./requests.routes"
import { authenticateRoutes } from "./authenticate.routes"
import { ingredientsRoutes } from "./ingredients.routes"

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/products", productsRoutes)
routes.use("/requests", requestsRoutes)
routes.use("/ingredients", ingredientsRoutes)
routes.use("/authenticate", authenticateRoutes)

export { routes }