"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIngredientController = void 0;
const CreateIngredientUseCase_1 = require("./CreateIngredientUseCase");
class CreateIngredientController {
    async handle(req, res) {
        const { name, image } = req.body;
        const createIngredientUseCase = new CreateIngredientUseCase_1.CreateIngredientUseCase();
        await createIngredientUseCase.execute({
            name,
            image
        });
        return res.json();
    }
}
exports.CreateIngredientController = CreateIngredientController;
//# sourceMappingURL=CreateIngredientCrontoller.js.map