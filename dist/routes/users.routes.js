"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("../modules/users/useCases/createUsers/CreateUserController");
const usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
const createUserController = new CreateUserController_1.CreateUserController();
usersRoutes.post("/", createUserController.handle);
//# sourceMappingURL=users.routes.js.map