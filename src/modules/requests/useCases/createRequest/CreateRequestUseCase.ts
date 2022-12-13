import { prismaClient } from "../../../../database/prismaClient"
import { AppError } from "../../../../utils/AppError"

interface ICreateRequest {
  userId: string
  requests: string[]
}

export class CreateRequestUseCase {
  async execute({
    userId,
    requests
  }: ICreateRequest) {

    const isUser = await prismaClient.user.findFirst({
      where: {
        id: userId,
      }
    })

    if (!isUser) {
      throw new AppError("Ação negada. Reconecte e tente novamente", 401)
    }

    await prismaClient.request.create({
      data: {
        userId,
        details: {
          connect: requests.map((request) => {
            return {
              name: request
            }
          })
        }
      }
    })
  }
}