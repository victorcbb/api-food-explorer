import { Router } from "express"
import { AuthenticateUserController } from "../modules/account/authenticateUser/AuthenticateUserController"
import { CreateUserController } from "../modules/users/useCases/createUsers/CreateUserController"

const usersRoutes = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

usersRoutes.post("/", createUserController.handle)
usersRoutes.post("/authenticate", authenticateUserController.handle)

export { usersRoutes }