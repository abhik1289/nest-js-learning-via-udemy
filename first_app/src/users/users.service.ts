import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {


    constructor(

        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService) { }

    public getUsers(id: number) {
        const isAuth = this.authService.auth();
        console.log(id,isAuth)
        return [{ id: 1, name: 'John' }, { id: 2, name: 'Mark' }]
    }
    public findById(id: any) {
        console.log(id)
    }

}
