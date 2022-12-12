import { prismaClient } from "../../../../database/prismaClient"
import { AppError } from "../../../../utils/AppError"

interface ICreateIngredient {
  name: string
  image: string
}

export class CreateIngredientUseCase {
  async execute({
    name,
    image
  }: ICreateIngredient) {

    const ingredientExists = await prismaClient.ingredient.findFirst({
      where: {
        name
      }
    })

    if (ingredientExists) {
      throw new AppError("Este ingrediente já existe!")
    }

    await prismaClient.ingredient.create({
      data: {
        name,
        image
      }
    })
  }
}