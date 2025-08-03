import { AuthService } from 'src/auth/auth.service';
export declare class UsersService {
    private readonly authService;
    constructor(authService: AuthService);
    getUsers(id: number): {
        id: number;
        name: string;
    }[];
    findById(id: any): void;
}
