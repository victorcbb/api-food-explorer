"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserRequestUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const AppError_1 = require("../../../../utils/AppError");
class ShowUserRequestUseCase {
    async execute({ userId }) {
        const isUser = await prismaClient_1.prismaClient.user.findFirst({
            where: {
                id: userId,
            }
        });
        if (!isUser) {
            throw new AppError_1.AppError("Ação negada. Reconecte e tente novamente", 401);
        }
        const result = await prismaClient_1.prismaClient.request.findMany({
            where: {
                userId,
            },
            orderBy: {
                id: "asc"
            },
            select: {
                createdAt: true,
                id: true,
                status: true,
                userId: true,
                details: true
            }
        });
        return result;
    }
}
exports.ShowUserRequestUseCase = ShowUserRequestUseCase;
