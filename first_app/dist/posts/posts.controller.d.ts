import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postService;
    constructor(postService: PostsService);
    getPosts(): {
        message: string;
        users: {
            id: number;
            name: string;
        }[];
    };
}
