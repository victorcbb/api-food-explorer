"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRequestUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const AppError_1 = require("../../../../utils/AppError");
class CreateRequestUseCase {
    async execute({ userId, requests }) {
        const isUser = await prismaClient_1.prismaClient.user.findFirst({
            where: {
                id: userId,
            }
        });
        if (!isUser) {
            throw new AppError_1.AppError("Ação negada. Reconecte e tente novamente", 401);
        }
        await prismaClient_1.prismaClient.request.create({
            data: {
                userId,
                details: {
                    connect: requests.map((request) => {
                        return {
                            name: request
                        };
                    })
                }
            }
        });
    }
}
exports.CreateRequestUseCase = CreateRequestUseCase;
