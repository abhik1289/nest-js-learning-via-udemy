import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

// TypeOrmModule.forRoot({
//       type: 'postgres',
//       entities: [],
//       synchronize: true, // Set to false in production for safety loose all data
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: '1234',
//       database: 'nest-app-1',
//     }),

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        entities: [User],
        synchronize: true, // Set to false in production for safety loose all data
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'nest-app-1',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
