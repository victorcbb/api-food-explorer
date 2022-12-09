import { prismaClient } from "../../../database/prismaClient"
import { AppError } from "../../../utils/AppError"

interface ICreateProduct {
  name: string
  description: string
  image: string
  price: number
  ingredients: string[]
}

export class CreateProductUseCase {
  async execute({
    name,
    description,
    image,
    price,
    ingredients
  }: ICreateProduct) {

    console.log(ingredients);
    

    const productExists = await prismaClient.product.findFirst({
      where: {
        name: {
          mode: "insensitive"
        }
      }
    })

    if (productExists) {
      throw new AppError("Este produto já existe!")
    }

    await prismaClient.product.create({
      data: {
        name,
        description,
        image,
        price,
        ingredients: {
          connectOrCreate: ingredients.map((ingredient) => {
            return {
              create: { name: ingredient },
              where: { name: ingredient },
            }
          })
        }
      }
    })

  }
}