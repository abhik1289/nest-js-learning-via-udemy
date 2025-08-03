import { Controller, Get, Post, Patch, Delete, Param, Query, Body, Req, Headers, Ip, ParseIntPipe, DefaultValuePipe } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {


    constructor(private readonly usersService: UsersService) { }

    @Get("/:id{/:op}")
    public getUser(
        @Param('id', ParseIntPipe) GetUserParamDto: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Headers() headers: any, @Ip() ip: any) {

        return this.usersService.getUsers(GetUserParamDto);
    }
    @Post()
    public createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto instanceof CreateUserDto)
        return "Create User";
    }

}
