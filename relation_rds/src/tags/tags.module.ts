import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { Tags } from './tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TagsController],
  imports: [TypeOrmModule.forFeature([Tags])],
})
export class TagsModule {}
