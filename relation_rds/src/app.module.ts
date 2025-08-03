import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TagsModule,
    MetaOptionsModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        autoLoadEntities: true,
        synchronize: true, // Set to false in production for safety loose all data
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'nest-app-1',
      }),
    }),
    PostsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
