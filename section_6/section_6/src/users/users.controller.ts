import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
// import { GetUsersParamDto } from './dtos/get-users-param.dto';
// import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
// import { ApiTags, ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
// @ApiTags('Users')
export class UsersController {
}