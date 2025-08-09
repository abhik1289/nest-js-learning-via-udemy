import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    readonly userRespository: Repository<User>,
    private dataSource: DataSource,
    private readonly configService: ConfigService
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const config = this.configService.get('database');
    console.log(config);
    // const user = this.userRespository.create(createUserDto);

    // return await this.userRespository.save(user);
    return {}
  }

  public async createManyuser(createUserDto: CreateUserDto[]) {
    let newUsers: User[] = [];

    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      for (let user of createUserDto) {
        const newUser = queryRunner.manager.create(User, user);
        await queryRunner.manager.save(newUser);
        newUsers.push(newUser);
      }
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
    return newUsers;
  }

  findAll() {
    return `This action returns all user`;
  }

  public async findOne(id: string) {
    return await this.userRespository.findOne({
      where: { id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
