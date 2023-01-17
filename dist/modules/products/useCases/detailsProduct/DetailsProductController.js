"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsProductController = void 0;
const DetailsProductUseCase_1 = require("./DetailsProductUseCase");
class DetailsProductController {
    async handle(req, res) {
        const { id } = req.params;
        const detailsProductUseCase = new DetailsProductUseCase_1.DetailsProductUseCase();
        const result = await detailsProductUseCase.execute({
            id
        });
        return res.json(result);
    }
}
exports.DetailsProductController = DetailsProductController;
