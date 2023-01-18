import { Request, Response } from "express"
import { CreateRequestUseCase } from "./CreateRequestUseCase"

export class CreateRequestController {
  async handle(req: Request, res: Response) {
    const userId = String(req.user.id)
    const { requests } = req.body

    const createRequestUseCase = new CreateRequestUseCase()

    await createRequestUseCase.execute({
      userId,
      requests
    })

    return res.status(201).json()
  }
}