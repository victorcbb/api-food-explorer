import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { authConfig } from "../../../configs/auth";
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

    const{ secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    })

    return token
  }
}