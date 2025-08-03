import { Body, Controller, Delete, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  public async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  public async findAll() {
    return this.postsService.findAll();
  }

  @Delete()
  public async delete(@Query('id',ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }

}
