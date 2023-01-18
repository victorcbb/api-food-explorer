import { Request, Response } from "express"
import { UpdateImageProductUseCase } from "./UpdateImageProductUseCase"

export class UpdateImageProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const image = req.file.filename

    const updateImageProductUseCase = new UpdateImageProductUseCase()

    await updateImageProductUseCase.execute({
      id,
      image
    })

    return res.status(200).json()
  }
}