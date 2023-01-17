"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsProductUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const AppError_1 = require("../../../../utils/AppError");
class DetailsProductUseCase {
    async execute({ id }) {
        const product = await prismaClient_1.prismaClient.product.findFirst({
            where: {
                id
            }
        });
        if (!product) {
            throw new AppError_1.AppError("Produto não encontrado.");
        }
        const result = await prismaClient_1.prismaClient.product.findFirst({
            where: {
                id
            },
            include: {
                ingredients: true
            }
        });
        return result;
    }
}
exports.DetailsProductUseCase = DetailsProductUseCase;
//# sourceMappingURL=DetailsProductUseCase.js.map