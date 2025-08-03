import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { PostsService } from './providers/posts.service';
import { UserModule } from 'src/user/user.module';
// import { TagsService } from 'src/tags/tags.service';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  controllers: [PostsController],
  imports: [UserModule,TagsModule, TypeOrmModule.forFeature([Post, MetaOption])],
  providers: [PostsService],
})
export class PostsModule {}
