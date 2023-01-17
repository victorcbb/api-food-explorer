interface IDetails {
    id: string;
}
export declare class DetailsProductUseCase {
    execute({ id }: IDetails): Promise<import(".prisma/client").Product & {
        ingredients: import(".prisma/client").Ingredient[];
    }>;
}
export {};
