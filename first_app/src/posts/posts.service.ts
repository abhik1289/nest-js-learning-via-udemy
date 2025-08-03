import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class PostsService {


    constructor(private readonly userService: UsersService) { }

    public getPosts() {
        const users = this.userService.getUsers(10);
        return {
            message: 'Posts fetched successfully',
            users,
        };
    }
}
