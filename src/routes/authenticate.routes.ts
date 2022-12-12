import { Router } from "express"
import { AuthenticateUserController } from "../modules/account/authenticateUser/AuthenticateUserController"

const authenticateRoutes = Router()

const authenticateUserController = new AuthenticateUserController()

authenticateRoutes.post("/", authenticateUserController.handle)

export { authenticateRoutes }