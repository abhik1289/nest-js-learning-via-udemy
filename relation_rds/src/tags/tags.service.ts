import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {

    constructor(
        @InjectRepository(Tag)
        private readonly tagRepository   : Repository<Tag>,
    ) {}

    public async create(createTagDto: Tag) {
        const tag = this.tagRepository.create(createTagDto);
        return await this.tagRepository.save(tag);
    }

    public async findAll() {
        return await this.tagRepository.find();
    }

    public async softDelete(id: number) {
        return await this.tagRepository.softDelete(id);
    }
    public async delete(id: number) {
        return await this.tagRepository.delete(id);
    }

    
}
