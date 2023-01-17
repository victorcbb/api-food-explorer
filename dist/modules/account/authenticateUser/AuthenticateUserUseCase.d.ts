interface IAuthenticateUser {
    email: string;
    password: string;
}
export declare class AuthenticateUserUseCase {
    execute({ email, password }: IAuthenticateUser): Promise<{
        user: import(".prisma/client").User;
        token: string;
    }>;
}
export {};
