"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class ListProductUseCase {
    async execute({ name }) {
        if (name) {
            const result = await prismaClient_1.prismaClient.product.findMany({
                orderBy: {
                    createdAt: 'asc'
                },
                where: {
                    OR: [
                        {
                            name: {
                                contains: name,
                                mode: "insensitive"
                            },
                        },
                        {
                            ingredients: {
                                some: {
                                    name: {
                                        contains: name,
                                        mode: "insensitive"
                                    }
                                }
                            },
                        },
                    ],
                },
            });
            return result;
        }
        const result = await prismaClient_1.prismaClient.product.findMany();
        return result;
    }
}
exports.ListProductUseCase = ListProductUseCase;
//# sourceMappingURL=ListProductUseCase.js.map