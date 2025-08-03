import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateTagDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  slug: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  schema: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featureImageUrl?: string;
}
