import { prismaClient } from "../../../../database/prismaClient"
import { AppError } from "../../../../utils/AppError"

interface IShowUserRequest {
  userId: string
}

export class ShowUserRequestUseCase {
  async execute({
    userId
  }: IShowUserRequest) {

    const isUser = await prismaClient.user.findFirst({
      where: {
        id: userId,
      }
    })

    if (!isUser) {
      throw new AppError("Ação negada. Reconecte e tente novamente", 401)
    }

    const result = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        requests: {
          include: {
            details: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        }
      }
    })

    return result
  }
}