import { prismaClient } from "../../../../database/prismaClient"
import { DiskStorage } from "../../../../providers/DiskStorage"
import { AppError } from "../../../../utils/AppError"

interface IDetails {
  id: string
}

export class DetailsProductUseCase {
  async execute({ id }: IDetails) {    

    const product = await prismaClient.product.findFirst({
      where: {
        id
      }
    })

    if (!product) {
      throw new AppError("Produto não encontrado.")
    }

    const result = await prismaClient.product.findFirst({
      where: {
        id
      },
      include: {
        ingredients: true
      }
    })

    return result
  }
}