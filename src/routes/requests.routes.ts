import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { CreateRequestController } from "../modules/requests/useCases/createRequest/CreateRequestController"
import { ShowAdminRequestController } from "../modules/requests/useCases/showAdminRequest/ShowAdminRequestController"
import { ShowUserRequestController } from "../modules/requests/useCases/showUserRequest/ShowUserRequestController"

const requestsRoutes = Router()

const createRequestController = new CreateRequestController()
const showUserRequestController = new ShowUserRequestController()
const showAdminRequestController = new ShowAdminRequestController()

requestsRoutes.post("/", ensureAuthenticated, createRequestController.handle)
requestsRoutes.get("/myrequests", ensureAuthenticated, showUserRequestController.handle)
requestsRoutes.get("/admin", ensureAuthenticated, showAdminRequestController.handle)

export { requestsRoutes }
