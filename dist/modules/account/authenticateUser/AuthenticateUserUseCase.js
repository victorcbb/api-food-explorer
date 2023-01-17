"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = require("../../../configs/auth");
const prismaClient_1 = require("../../../database/prismaClient");
const AppError_1 = require("../../../utils/AppError");
class AuthenticateUserUseCase {
    async execute({ email, password }) {
        const user = await prismaClient_1.prismaClient.user.findFirst({
            where: {
                email
            }
        });
        if (!user) {
            throw new AppError_1.AppError("Usuário e/ou senha inválidos.", 403);
        }
        const passwordMatch = await (0, bcrypt_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new AppError_1.AppError("Usuário e/ou senha inválidos.", 403);
        }
        const { secret, expiresIn } = auth_1.authConfig.jwt;
        const token = (0, jsonwebtoken_1.sign)({}, secret, {
            subject: user.id,
            expiresIn
        });
        return { user, token };
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
//# sourceMappingURL=AuthenticateUserUseCase.js.map