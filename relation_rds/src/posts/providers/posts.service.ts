import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { CreatePostDto } from '../dtos/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
// import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostsService {
  constructor(
    // Inject any necessary repositories or services here
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
    private readonly usersService: UserService,
  ) {}

  public async create(createPostDto: CreatePostDto) {
    // const

    const { metaOptions, authorId, ...rest } = createPostDto;

    //find author
    const user = await this.usersService.findOne(authorId);
    // console.log(user);
    if (!user) {
      throw new Error(`Author with ID ${authorId} not found`);
    }

    // Create a new post entity
    // and assign the author and metaOptions if provided
    const post = this.postRepository.create({
      ...rest,
      metaOptions: metaOptions ? { ...metaOptions } : undefined,
      author: user,
    });
    return this.postRepository.save(post);
    // return {}
  }

  public async findAll() {
    return this.postRepository.find({
      relations: ['metaOptions'],
    });
  }

  public async delete(id: number) {
    // // const numericId = Number(id);
    const post = await this.postRepository.findOne({
      where: { id },
      relations: {
        metaOptions: true,
      },
    });
    console.log(post?.metaOptions);
    // console.log(post);
    // let metaOption = await this.metaOptionRepository.findOne({
    //   where: { id: post?.metaOptions?.id },
    //   relations: {
    //     post: true,
    //   },
    // });
    // console.log(metaOption);
    // // await this.postRepository.delete(id);
    // // if (post && post.metaOptions)
    // //   await this.metaOptionRepository.delete(post.metaOptions.id);
    if (post) await this.postRepository.delete(id);
    if (post?.metaOptions)
      await this.metaOptionRepository.delete(post.metaOptions.id);

    return { success: true, id };
  }
}
