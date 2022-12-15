import { Request, Response } from "express"
import { UpdateStatusRequestUseCase } from "./UpdateStatusRequestUseCase"

export class UpdateStatusRequestController {
  async handle(req: Request, res: Response) {
    const adminId = req.user.id
    const { status, id } = req.body

    const updateStatusRequestUseCase = new UpdateStatusRequestUseCase()

    await updateStatusRequestUseCase.execute({ adminId, status, id })

    return res.json()
  }
}