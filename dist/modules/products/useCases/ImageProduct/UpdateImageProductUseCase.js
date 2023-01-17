"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImageProductUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
const DiskStorage_1 = require("../../../../providers/DiskStorage");
const AppError_1 = require("../../../../utils/AppError");
class UpdateImageProductUseCase {
    async execute({ id, image }) {
        const diskStorage = new DiskStorage_1.DiskStorage();
        const product = await prismaClient_1.prismaClient.product.findFirst({
            where: {
                id
            }
        });
        if (!product) {
            throw new AppError_1.AppError("Produto não encontrado.");
        }
        if (product.image) {
            await diskStorage.deleteFile(product.image);
        }
        const filename = await diskStorage.saveFile(image);
        await prismaClient_1.prismaClient.product.update({
            where: {
                id
            },
            data: {
                image: filename
            }
        });
    }
}
exports.UpdateImageProductUseCase = UpdateImageProductUseCase;
//# sourceMappingURL=UpdateImageProductUseCase.js.map