import { TagsService } from './tags.service';
import { Tag } from './tag.entity';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    createTag(createTagDto: Tag): Promise<Tag>;
    getTags(): Promise<Tag[]>;
    deleteTag(id: number): Promise<import("typeorm").DeleteResult>;
    SoftDeleteTag(id: number): Promise<import("typeorm").UpdateResult>;
}
