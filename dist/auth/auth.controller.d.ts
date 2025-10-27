import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
        user: {
            id: number;
            username: string;
            role: "admin" | "apprenant";
        };
    }>;
    validateToken(body: {
        token: string;
    }): Promise<{
        valid: boolean;
    }>;
}
