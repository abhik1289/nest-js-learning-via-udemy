import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { PostsService } from './providers/posts.service';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [PostsController],
  imports: [UserModule, TypeOrmModule.forFeature([Post, MetaOption])],
  providers: [PostsService],
})
export class PostsModule {}
