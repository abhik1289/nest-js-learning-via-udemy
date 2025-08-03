import { IsNumber, IsInt } from "class-validator";
import { Transform, Type } from "class-transformer";


export class GetUserParamDto {
    @IsInt()
    @Transform(({ value }) => parseInt(value, 10))
    id: number;
}