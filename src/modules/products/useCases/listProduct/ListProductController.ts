import { Request, Response } from "express"
import { ListProductUseCase } from "./ListProductUseCase"

export class ListProductController {
  async handle(req: Request, res: Response) {

    const listProductUseCase = new ListProductUseCase()

    const result = await listProductUseCase.execute()

    return res.json(result)
  }
}