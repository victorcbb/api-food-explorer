interface IUpdateImage {
    id: string;
    image: string;
}
export declare class UpdateImageProductUseCase {
    execute({ id, image }: IUpdateImage): Promise<void>;
}
export {};
