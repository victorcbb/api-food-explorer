import { prismaClient } from "../../../../database/prismaClient"
import { AppError } from "../../../../utils/AppError"

interface ICreateProduct {
  name: string
  description: string
  price: number
  ingredients: string[]
}

export class CreateProductUseCase {
  async execute({
    name,
    description,
    price,
    ingredients
  }: ICreateProduct) {

    const productExists = await prismaClient.product.findFirst({
      where: {
        name
      }
    })

    if (productExists) {
      throw new AppError("Este produto já existe!")
    }

    await prismaClient.product.create({
      data: {
        name,
        description,
        price,
        ingredients: {
          connect: ingredients.map((ingredient) => {
            return {
              name: ingredient
            }
          })
        }
      }
    })

  }
}