"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserUseCase_1 = require("./CreateUserUseCase");
class CreateUserController {
    async handle(req, res) {
        const { name, email, password } = req.body;
        const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase();
        await createUserUseCase.execute({
            name,
            email,
            password,
        });
        return res.json();
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map