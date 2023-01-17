"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRequestController = void 0;
const CreateRequestUseCase_1 = require("./CreateRequestUseCase");
class CreateRequestController {
    async handle(req, res) {
        const userId = String(req.user.id);
        const { requests } = req.body;
        const createRequestUseCase = new CreateRequestUseCase_1.CreateRequestUseCase();
        await createRequestUseCase.execute({
            userId,
            requests
        });
        return res.json();
    }
}
exports.CreateRequestController = CreateRequestController;
//# sourceMappingURL=CreateRequestController.js.map