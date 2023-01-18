import { Request, Response } from "express"
import { CreateProductUseCase } from "./CreateProductUseCase"

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, description, price, ingredients, category } = req.body

    const createProductUseCase = new CreateProductUseCase()

    await createProductUseCase.execute({
      name,
      description,
      price,
      ingredients,
      category
    })

    return res.status(201).json()
  }
}