import { prismaClient } from "../../../../database/prismaClient"
import { AppError } from "../../../../utils/AppError"

interface IUpdateStatusRequest {
  adminId: string,
  status: "PENDING" | "PREPARING" | "DELIVERED",
  id: number,
}

export class UpdateStatusRequestUseCase {
  async execute({
    adminId,
    status,
    id
  }: IUpdateStatusRequest) {

    const isAdmin = await prismaClient.user.findFirst({
      where: {
        id: adminId,
        AND: {
          role: 'ADMIN'
        }
      },
    })

    if (!isAdmin && isAdmin.role !== 'ADMIN') {
      throw new AppError("Ação negada.", 403)
    }

    const request = await prismaClient.request.findFirst({
      where: {
        id
      }
    })

    if (request.status === status) {
      return
    }

    await prismaClient.request.update({
      where: {
        id
      },
      data: {
        status,
        updatedAt: new Date()
      }
    })
  }
}