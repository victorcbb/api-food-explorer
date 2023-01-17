"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductUseCase_1 = require("./CreateProductUseCase");
class CreateProductController {
    async handle(req, res) {
        const { name, description, price, ingredients, category } = req.body;
        const createProductUseCase = new CreateProductUseCase_1.CreateProductUseCase();
        await createProductUseCase.execute({
            name,
            description,
            price,
            ingredients,
            category
        });
        return res.json();
    }
}
exports.CreateProductController = CreateProductController;
//# sourceMappingURL=CreateProductController.js.map