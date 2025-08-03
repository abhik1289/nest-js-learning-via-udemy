import { IsEmail, IsOptional, IsString, Max, MaxLength, Min } from "@nestjs/class-validator";



export class CreateUserDto {


    @IsString()
    @MaxLength(10)
    firstName: string;
    @IsString()
    @Min(4, {
        message: "Min 4"
    })
    @Max(10)
    @IsOptional()
    lastName?: string;
    @IsEmail()
    email: string;
    @IsString()
    // @Min(4, {
    //     message: "Min 8"
    // })
    password: string;

}