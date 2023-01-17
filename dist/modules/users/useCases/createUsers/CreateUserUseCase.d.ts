interface ICreateUser {
    name: string;
    email: string;
    password: string;
}
export declare class CreateUserUseCase {
    execute({ name, email, password }: ICreateUser): Promise<void>;
}
export {};
