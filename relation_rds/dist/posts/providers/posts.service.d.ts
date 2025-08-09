import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { CreatePostDto } from '../dtos/create-post.dto';
import { UserService } from 'src/user/user.service';
import { TagsService } from 'src/tags/tags.service';
export declare class PostsService {
    private readonly postRepository;
    private readonly metaOptionRepository;
    private readonly usersService;
    private readonly tagsService;
    constructor(postRepository: Repository<Post>, metaOptionRepository: Repository<MetaOption>, usersService: UserService, tagsService: TagsService);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    delete(id: number): Promise<void>;
}
