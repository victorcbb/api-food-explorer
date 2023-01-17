"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const users_routes_1 = require("./users.routes");
const products_routes_1 = require("./products.routes");
const requests_routes_1 = require("./requests.routes");
const authenticate_routes_1 = require("./authenticate.routes");
const ingredients_routes_1 = require("./ingredients.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/users", users_routes_1.usersRoutes);
routes.use("/products", products_routes_1.productsRoutes);
routes.use("/requests", requests_routes_1.requestsRoutes);
routes.use("/ingredients", ingredients_routes_1.ingredientsRoutes);
routes.use("/authenticate", authenticate_routes_1.authenticateRoutes);
//# sourceMappingURL=index.js.map