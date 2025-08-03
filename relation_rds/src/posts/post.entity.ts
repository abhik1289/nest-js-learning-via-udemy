import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

// import { MetaOption } from 'src/meta-options/meta-option.entity';
import { postStatus } from './enums/postStatus.enum';
import { postType } from './enums/postType.enum';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { User } from 'src/user/entities/user.entity';
import { Tag } from 'src/tags/tag.entity';
// import { MetaOptions } from 'src/meta-options/meta-option.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: postType,
    nullable: false,
    default: postType.POST,
  })
  postType: postType;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp', // 'datetime' in mysql
    nullable: true,
  })
  publishOn?: Date;
  //   @OneToOne(() => MetaOption, (metaOpt) => metaOpt.post, {
  //     cascade: true, //-> This is used to automatically save the metaOptions when the post is saved
  //     eager: true, //-> This is used to automatically load the metaOptions when the post is loaded
  //   })
  //     @JoinColumn() //-> This decorator is used to specify that this is a foreign key relationship between the Post and MetaOption entities only if you want to use a single column for the foreign key
  @OneToOne(() => MetaOption, (MetaOption) => MetaOption.post, {
    cascade: true,
    eager: true, // Automatically save metaOptions when post is saved
  })
  @JoinColumn() // This decorator is used to specify that this is a foreign key relationship between the Post and MetaOption entities
  metaOptions?: MetaOption;

  // Work on these in lecture on relationships

  @ManyToOne(() => User, (user) => user.posts, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  author: User;

  @ManyToMany(() => Tag, (tag) => tag.posts,{
    eager: true
  })
  @JoinTable()
  tags?: Tag[];
}
