import { Post } from 'src/posts/post.entity';
export declare class MetaOption {
    id: string;
    metaValue: string;
    createdAt: Date;
    updatedAt: Date;
    post: Post;
}
