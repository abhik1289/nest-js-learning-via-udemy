import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
export declare class UserService {
    readonly userRespository: Repository<User>;
    private dataSource;
    private readonly configService;
    constructor(userRespository: Repository<User>, dataSource: DataSource, configService: ConfigService);
    create(createUserDto: CreateUserDto): Promise<{}>;
    createManyuser(createUserDto: CreateUserDto[]): Promise<User[]>;
    findAll(): string;
    findOne(id: string): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
