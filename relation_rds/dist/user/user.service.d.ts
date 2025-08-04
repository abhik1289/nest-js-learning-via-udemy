import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
export declare class UserService {
    readonly userRespository: Repository<User>;
    private dataSource;
    constructor(userRespository: Repository<User>, dataSource: DataSource);
    create(createUserDto: CreateUserDto): Promise<User>;
    createManyuser(createUserDto: CreateUserDto[]): Promise<User[]>;
    findAll(): string;
    findOne(id: string): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
