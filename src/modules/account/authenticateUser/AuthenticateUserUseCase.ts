import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../../database/prismaClient"
import { AppError } from "../../../utils/AppError";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prismaClient.user.findFirst({
      where: {
        email
      }
    })
    
    if (!user) {
      throw new AppError("Usuário e/ou senha inválidos.", 403)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError("Usuário e/ou senha inválidos.", 403)
    }

    const token = await sign({email}, "6818cd21a3bd0e0636bdbc48372efd69", {
      subject: user.id,
      expiresIn: "1d"
    })

    return token
  }
}