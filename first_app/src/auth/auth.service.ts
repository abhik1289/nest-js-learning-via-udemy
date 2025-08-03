import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {


    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService) { }

    public validate(email: string, password: string) {
        const user = this.usersService.findById(12);
        // logic to validate email and password
        return true; // replace with actual validation logic
    }
    public auth() {
        return true;
    }
}
