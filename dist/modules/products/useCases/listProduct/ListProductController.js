"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductController = void 0;
const ListProductUseCase_1 = require("./ListProductUseCase");
class ListProductController {
    async handle(req, res) {
        const { name } = req.query;
        const listProductUseCase = new ListProductUseCase_1.ListProductUseCase();
        if (typeof name === 'string') {
            const result = await listProductUseCase.execute({ name });
            return res.json(result);
        }
        return res.json();
    }
}
exports.ListProductController = ListProductController;
//# sourceMappingURL=ListProductController.js.map