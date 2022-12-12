import { Router } from "express";
import { CreateIngredientController } from "../modules/ingredients/useCases/createIngredients/CreateIngredientCrontoller";

const ingredientsRoutes = Router()

const createIngredientController = new CreateIngredientController()

ingredientsRoutes.post("/", createIngredientController.handle)

export { ingredientsRoutes }
