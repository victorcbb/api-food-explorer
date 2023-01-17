"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoutes = void 0;
const express_1 = require("express");
const AuthenticateUserController_1 = require("../modules/account/authenticateUser/AuthenticateUserController");
const authenticateRoutes = (0, express_1.Router)();
exports.authenticateRoutes = authenticateRoutes;
const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
authenticateRoutes.post("/", authenticateUserController.handle);
