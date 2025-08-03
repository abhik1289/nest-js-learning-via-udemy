import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    readonly userRespository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto) {
    const user = this.userRespository.create(createUserDto);

    return await this.userRespository.save(user);
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
