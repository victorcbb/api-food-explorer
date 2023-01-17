"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const AppError_1 = require("../../../../utils/AppError");
class CreateProductUseCase {
    async execute({ name, description, price, ingredients, category }) {
        const productExists = await prismaClient_1.prismaClient.product.findFirst({
            where: {
                name
            }
        });
        if (productExists) {
            throw new AppError_1.AppError("Este produto já existe!");
        }
        await prismaClient_1.prismaClient.product.create({
            data: {
                name,
                description,
                price,
                category,
                ingredients: {
                    connect: ingredients.map((ingredient) => {
                        return {
                            name: ingredient
                        };
                    })
                }
            },
        });
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
//# sourceMappingURL=CreateProductUseCase.js.map