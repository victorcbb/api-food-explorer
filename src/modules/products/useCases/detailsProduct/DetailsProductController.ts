import { Request, Response } from "express"
import { DetailsProductUseCase } from "./DetailsProductUseCase"

export class DetailsProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const detailsProductUseCase = new DetailsProductUseCase()

    const result = await detailsProductUseCase.execute({
      id
    })

    return res.json(result)
  }
}