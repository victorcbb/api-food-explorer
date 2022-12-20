import { prismaClient } from "../../../../database/prismaClient"

export class ListProductUseCase {
  async execute() {

    const result = await prismaClient.product.findMany()

    return result
  }
}