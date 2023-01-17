"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const prismaClient_1 = require("../../../../database/prismaClient");
const AppError_1 = require("../../../../utils/AppError");
class CreateUserUseCase {
    async execute({ name, email, password }) {
        const userExists = await prismaClient_1.prismaClient.user.findFirst({
            where: {
                email
            }
        });
        if (userExists) {
            throw new AppError_1.AppError("Este e-mail já está em uso.");
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        await prismaClient_1.prismaClient.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
