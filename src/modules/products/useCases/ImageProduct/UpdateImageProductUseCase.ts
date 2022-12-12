import { prismaClient } from "../../../../database/prismaClient"
import { DiskStorage } from "../../../../providers/DiskStorage"
import { AppError } from "../../../../utils/AppError"

interface IUpdateImage {
  id: string
  image: string
}

export class UpdateImageProductUseCase {
  async execute({ id, image }: IUpdateImage) {    

    const diskStorage = new DiskStorage()

    const product = await prismaClient.product.findFirst({
      where: {
        id
      }
    })

    if (!product) {
      throw new AppError("Produto não encontrado.")
    }

    if (product.image) {
      await diskStorage.deleteFile(product.image)
    }

    const filename = await diskStorage.saveFile(image)

    await prismaClient.product.update({
      where: {
        id
      },
      data: {
        image: filename
      }
    })
  }
}