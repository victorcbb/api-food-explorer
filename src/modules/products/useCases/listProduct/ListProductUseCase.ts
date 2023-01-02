import { prismaClient } from "../../../../database/prismaClient"

interface IListProduct {
  name: string
}

export class ListProductUseCase {
  async execute({ name }: IListProduct) {

    if(name) {
      const result = await prismaClient.product.findMany({
        where: {
          name: {
            contains: name,
            mode: "insensitive"
          }
        }
      })

      return result
    }

    const result = await prismaClient.product.findMany()

    return result
  }
}