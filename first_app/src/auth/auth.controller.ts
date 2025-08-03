import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post()
    public login(email: string, password: string) {
        return this.authService.validate(email, password);
    }
}
