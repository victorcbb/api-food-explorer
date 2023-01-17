interface ICreateIngredient {
    name: string;
    image: string;
}
export declare class CreateIngredientUseCase {
    execute({ name, image }: ICreateIngredient): Promise<void>;
}
export {};
