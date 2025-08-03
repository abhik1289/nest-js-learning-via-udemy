import { MetaOption } from '../meta-option.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';
export declare class MetaOptionsService {
    private readonly metaOptionRepository;
    constructor(metaOptionRepository: Repository<MetaOption>);
    create(createMetaOptionDto: CreatePostMetaOptionsDto): Promise<MetaOption>;
}
