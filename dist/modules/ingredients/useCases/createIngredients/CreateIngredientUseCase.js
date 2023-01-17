"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIngredientUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const AppError_1 = require("../../../../utils/AppError");
class CreateIngredientUseCase {
    async execute({ name, image }) {
        const ingredientExists = await prismaClient_1.prismaClient.ingredient.findFirst({
            where: {
                name
            }
        });
        if (ingredientExists) {
            throw new AppError_1.AppError("Este ingrediente já existe!");
        }
        await prismaClient_1.prismaClient.ingredient.create({
            data: {
                name,
                image
            }
        });
    }
}
exports.CreateIngredientUseCase = CreateIngredientUseCase;
