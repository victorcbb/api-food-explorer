import { Request, Response } from "express"
import { ListProductUseCase } from "./ListProductUseCase"

export class ListProductController {
  async handle(req: Request, res: Response){
    const { name } = req.query

    const listProductUseCase = new ListProductUseCase()

    if (typeof name === 'string') {
      const result = await listProductUseCase.execute({ name })
      return res.json(result)
    }

    return res.status(200).json()
  }
}