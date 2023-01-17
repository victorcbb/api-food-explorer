"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImageProductController = void 0;
const UpdateImageProductUseCase_1 = require("./UpdateImageProductUseCase");
class UpdateImageProductController {
    async handle(req, res) {
        const { id } = req.params;
        const image = req.file.filename;
        const updateImageProductUseCase = new UpdateImageProductUseCase_1.UpdateImageProductUseCase();
        await updateImageProductUseCase.execute({
            id,
            image
        });
        return res.json();
    }
}
exports.UpdateImageProductController = UpdateImageProductController;
