import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty({ example: 'Toyota' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty({ example: 'Japan' })
  country_of_origin: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
