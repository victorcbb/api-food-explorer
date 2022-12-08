import { hash } from "bcrypt"

import { prismaClient } from "../../../../database/prismaClient"
import { AppError } from "../../../../utils/AppError"

interface ICreateUser {
  name: string
  email: string
  password: string
}

export class CreateUserUseCase {
  async execute({ name, email, password }: ICreateUser) {
    const userExists = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    if (userExists) {
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashedPassword = await hash(password, 10)

    await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })
  }
}