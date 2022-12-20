import { prismaClient } from "../../../../database/prismaClient"
import { AppError } from "../../../../utils/AppError"

interface ICreateProduct {
  name: string
  description: string
  price: number
  ingredients: string[]
  category: "main" | "dessert" | "drink"
}

export class CreateProductUseCase {
  async execute({
    name,
    description,
    price,
    ingredients,
    category
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
        category,
        ingredients: {
          connect: ingredients.map((ingredient) => {
            return {
              name: ingredient
            }
          })
        }
      },
    })

  }
}