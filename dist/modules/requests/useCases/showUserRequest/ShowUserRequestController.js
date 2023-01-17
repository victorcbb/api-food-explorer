"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserRequestController = void 0;
const ShowUserRequestUseCase_1 = require("./ShowUserRequestUseCase");
class ShowUserRequestController {
    async handle(req, res) {
        const userId = req.user.id;
        const showUserRequestUseCase = new ShowUserRequestUseCase_1.ShowUserRequestUseCase();
        const result = await showUserRequestUseCase.execute({ userId });
        return res.json(result);
    }
}
exports.ShowUserRequestController = ShowUserRequestController;
