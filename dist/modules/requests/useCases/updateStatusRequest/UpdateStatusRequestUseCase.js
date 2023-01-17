"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusRequestUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const AppError_1 = require("../../../../utils/AppError");
class UpdateStatusRequestUseCase {
    async execute({ adminId, status, id }) {
        const isAdmin = await prismaClient_1.prismaClient.user.findFirst({
            where: {
                id: adminId,
                AND: {
                    role: 'ADMIN'
                }
            },
        });
        if (!isAdmin) {
            throw new AppError_1.AppError("Ação negada.", 403);
        }
        const request = await prismaClient_1.prismaClient.request.findFirst({
            where: {
                id
            }
        });
        if (request.status === status) {
            return;
        }
        await prismaClient_1.prismaClient.request.update({
            where: {
                id
            },
            data: {
                status
            }
        });
    }
}
exports.UpdateStatusRequestUseCase = UpdateStatusRequestUseCase;
