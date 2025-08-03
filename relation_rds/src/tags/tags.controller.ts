import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Tag } from './tag.entity';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagsService: TagsService) {}

    @Post()
    public async createTag(@Body() createTagDto: Tag) {
        return await this.tagsService.create(createTagDto);
    }

    @Get()
    public async getTags() {
        return await this.tagsService.findAll();
    }

    @Delete()
    public async deleteTag(@Query('id',ParseIntPipe) id:number) {
        return await this.tagsService.delete(id);
    }

    @Delete("soft-delete")
    public async SoftDeleteTag(@Query('id',ParseIntPipe) id:number) {
        return await this.tagsService.softDelete(id);
    }

}
