import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from '../meta-option.entity';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}
  public async create(createMetaOptionDto: CreatePostMetaOptionsDto) {
    const metaOption = this.metaOptionRepository.create(createMetaOptionDto);
    return this.metaOptionRepository.save(metaOption);
  }
}
