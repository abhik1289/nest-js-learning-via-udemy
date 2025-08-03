import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { CreatePostDto } from '../dtos/create-post.dto';
import { UserService } from 'src/user/user.service';
export declare class PostsService {
    private readonly postRepository;
    private readonly metaOptionRepository;
    private readonly usersService;
    constructor(postRepository: Repository<Post>, metaOptionRepository: Repository<MetaOption>, usersService: UserService);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    delete(id: number): Promise<{
        success: boolean;
        id: number;
    }>;
}
