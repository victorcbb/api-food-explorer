interface ICreateProduct {
    name: string;
    description: string;
    price: number;
    ingredients: string[];
    category: "main" | "dessert" | "drink";
}
export declare class CreateProductUseCase {
    execute({ name, description, price, ingredients, category }: ICreateProduct): Promise<void>;
}
export {};
