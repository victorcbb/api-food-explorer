"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowAdminRequestController = void 0;
const ShowAdminRequestUseCase_1 = require("./ShowAdminRequestUseCase");
class ShowAdminRequestController {
    async handle(req, res) {
        const adminId = req.user.id;
        const showAdminRequestUseCase = new ShowAdminRequestUseCase_1.ShowAdminRequestUseCase();
        const result = await showAdminRequestUseCase.execute({ adminId });
        return res.json(result);
    }
}
exports.ShowAdminRequestController = ShowAdminRequestController;
//# sourceMappingURL=ShowAdminRequestController.js.map