import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<import("./post.entity").Post>;
    findAll(): Promise<import("./post.entity").Post[]>;
    delete(id: number): Promise<{
        success: boolean;
        id: number;
    }>;
}
