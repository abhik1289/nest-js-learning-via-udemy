import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(limt: number, page: number): {
        firstName: string;
        email: string;
    }[];
    findOneById(id: string): {
        id: number;
        firstName: string;
        email: string;
    };
}
