import { Request, Response } from "express"
import { CreateIngredientUseCase } from "./CreateIngredientUseCase"

export class CreateIngredientController {
  async handle(req: Request, res: Response) {
    const { name, image } = req.body

    const createIngredientUseCase = new CreateIngredientUseCase()

    await createIngredientUseCase.execute({
      name,
      image
    })

    return res.status(201).json()
  }
}