"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusRequestController = void 0;
const UpdateStatusRequestUseCase_1 = require("./UpdateStatusRequestUseCase");
class UpdateStatusRequestController {
    async handle(req, res) {
        const adminId = req.user.id;
        const { status, id } = req.body;
        const updateStatusRequestUseCase = new UpdateStatusRequestUseCase_1.UpdateStatusRequestUseCase();
        await updateStatusRequestUseCase.execute({ adminId, status, id });
        return res.json();
    }
}
exports.UpdateStatusRequestController = UpdateStatusRequestController;
//# sourceMappingURL=UpdateStatusRequestController.js.map