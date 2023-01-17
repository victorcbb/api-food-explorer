"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = require("../configs/auth");
const AppError_1 = require("../utils/AppError");
function ensureAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) {
        throw new AppError_1.AppError("Token não informado", 401);
    }
    const [, token] = authToken.split(" ");
    try {
        const { sub: userId } = (0, jsonwebtoken_1.verify)(token, auth_1.authConfig.jwt.secret);
        req.user = {
            id: userId.toString(),
        };
        return next();
    }
    catch (error) {
        throw new AppError_1.AppError("Token inválido", 401);
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
