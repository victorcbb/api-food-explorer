import { Request, Response } from "express"
import { ShowAdminRequestUseCase } from "./ShowAdminRequestUseCase"

export class ShowAdminRequestController {
  async handle(req: Request, res: Response) {
    const adminId = req.user.id

    const showAdminRequestUseCase = new ShowAdminRequestUseCase()

    const result = await showAdminRequestUseCase.execute({ adminId })

    return res.status(200).json(result)
  }
}