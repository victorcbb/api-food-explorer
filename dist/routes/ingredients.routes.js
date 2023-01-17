"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredientsRoutes = void 0;
const express_1 = require("express");
const CreateIngredientCrontoller_1 = require("../modules/ingredients/useCases/createIngredients/CreateIngredientCrontoller");
const ingredientsRoutes = (0, express_1.Router)();
exports.ingredientsRoutes = ingredientsRoutes;
const createIngredientController = new CreateIngredientCrontoller_1.CreateIngredientController();
ingredientsRoutes.post("/", createIngredientController.handle);
//# sourceMappingURL=ingredients.routes.js.map