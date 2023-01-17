interface IListProduct {
    name: string;
}
export declare class ListProductUseCase {
    execute({ name }: IListProduct): Promise<import(".prisma/client").Product[]>;
}
export {};
