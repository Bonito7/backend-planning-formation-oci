import { JwtService } from '@nestjs/jwt';
interface User {
    id: number;
    username: string;
    password: string;
    role: 'admin' | 'apprenant';
}
export declare class AuthService {
    private jwtService;
    private readonly users;
    constructor(jwtService: JwtService);
    validateUser(username: string, password: string): Promise<Omit<User, 'password'> | null>;
    login(user: Omit<User, 'password'>): Promise<{
        access_token: string;
        user: {
            id: number;
            username: string;
            role: "admin" | "apprenant";
        };
    }>;
    validateToken(token: string): Promise<{
        valid: boolean;
        user: any;
    } | {
        valid: boolean;
        user?: undefined;
    }>;
}
export {};
