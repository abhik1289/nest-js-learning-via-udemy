import { Post } from 'src/posts/post.entity';
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isActive: boolean;
    posts: Post[];
}
