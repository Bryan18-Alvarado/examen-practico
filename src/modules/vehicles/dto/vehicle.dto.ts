import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateVehicleDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  model_id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ example: '1HGBH41JXMN109186' })
  vin: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ example: 2024 })
  year: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ example: 'Rojo' })
  color: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({ example: 15000, required: false })
  mileage?: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ example: 25000.00 })
  price: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ example: 'disponible' })
  status: string;
}

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {}
