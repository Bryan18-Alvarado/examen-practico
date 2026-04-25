import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleModel } from './entities/vehicle-model.entity';
import { ModelsController } from './controllers/models.controller';
import { ModelsService } from './services/models.service';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleModel])],
  controllers: [ModelsController],
  providers: [ModelsService],
  exports: [ModelsService],
})
export class ModelsModule {}
