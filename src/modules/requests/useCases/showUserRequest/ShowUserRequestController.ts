import { Request, Response } from "express"
import { ShowUserRequestUseCase } from "./ShowUserRequestUseCase"

export class ShowUserRequestController {
  async handle(req: Request, res: Response) {
    const userId = req.user.id

    const showUserRequestUseCase = new ShowUserRequestUseCase()

    const result = await showUserRequestUseCase.execute({ userId })

    return res.json(result)
  }
}