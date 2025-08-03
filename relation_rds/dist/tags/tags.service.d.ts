import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
export declare class TagsService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<Tag>);
    create(createTagDto: Tag): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    softDelete(id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
