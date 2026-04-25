import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateVehicleModelDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  brand_id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty({ example: 'Corolla' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty({ example: 'Sedan' })
  type: string;
}

export class UpdateVehicleModelDto extends PartialType(CreateVehicleModelDto) {}
