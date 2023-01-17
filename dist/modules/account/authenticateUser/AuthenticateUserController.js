"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
const AuthenticateUserUseCase_1 = require("./AuthenticateUserUseCase");
class AuthenticateUserController {
    async handle(req, res) {
        const { email, password } = req.body;
        const authenticateUserUseCase = new AuthenticateUserUseCase_1.AuthenticateUserUseCase();
        const result = await authenticateUserUseCase.execute({
            email,
            password
        });
        return res.json(result);
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
//# sourceMappingURL=AuthenticateUserController.js.map