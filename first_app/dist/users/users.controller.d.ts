import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUser(getUserParamDto: number, limit: number, page: number, headers: any, ip: any): {
        id: number;
        name: string;
    }[];
    createUser(createUserDto: CreateUserDto): string;
}
