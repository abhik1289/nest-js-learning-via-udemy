import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    useFactory: () => ({
      url: "postgresql://user_owner:npg_5aYSGCZ3wjrm@ep-shy-sound-a4tjvmkl-pooler.us-east-1.aws.neon.tech/user?sslmode=require",
      type: 'postgres',
      ssl: true,
      synchronize: true,
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
