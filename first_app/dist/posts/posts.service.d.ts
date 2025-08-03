import { UsersService } from 'src/users/users.service';
export declare class PostsService {
    private readonly userService;
    constructor(userService: UsersService);
    getPosts(): {
        message: string;
        users: {
            id: number;
            name: string;
        }[];
    };
}
