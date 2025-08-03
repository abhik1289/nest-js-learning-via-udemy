import { postStatus } from './enums/postStatus.enum';
import { postType } from './enums/postType.enum';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { User } from 'src/user/entities/user.entity';
import { Tag } from 'src/tags/tag.entity';
export declare class Post {
    id: number;
    title: string;
    postType: postType;
    slug: string;
    status: postStatus;
    content?: string;
    schema?: string;
    featuredImageUrl?: string;
    publishOn?: Date;
    metaOptions?: MetaOption;
    author: User;
    tags?: Tag[];
}
