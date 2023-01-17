"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowAdminRequestUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const AppError_1 = require("../../../../utils/AppError");
class ShowAdminRequestUseCase {
    async execute({ adminId }) {
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
        const result = await prismaClient_1.prismaClient.request.findMany({
            include: {
                details: true,
            }
        });
        return result;
    }
}
exports.ShowAdminRequestUseCase = ShowAdminRequestUseCase;
