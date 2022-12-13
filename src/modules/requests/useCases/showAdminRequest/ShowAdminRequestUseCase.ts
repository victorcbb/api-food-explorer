import { prismaClient } from "../../../../database/prismaClient"
import { AppError } from "../../../../utils/AppError"

interface IShowAdminRequest {
  adminId: string
}

export class ShowAdminRequestUseCase {
  async execute({
    adminId
  }: IShowAdminRequest) {

    const isAdmin = await prismaClient.user.findFirst({
      where: {
        id: adminId,
        AND: {
          role: 'ADMIN'
        }
      },
    })

    if (!isAdmin) {
      throw new AppError("Ação negada.", 401)
    }

    const result = await prismaClient.request.findMany({})

    return result
  }
}