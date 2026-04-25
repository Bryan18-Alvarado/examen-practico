import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleModel } from '../entities/vehicle-model.entity';
import {
  CreateVehicleModelDto,
  UpdateVehicleModelDto,
} from '../dto/vehicle-model.dto';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(VehicleModel)
    private readonly vehicleModelRepository: Repository<VehicleModel>,
  ) {}

  async create(
    createVehicleModelDto: CreateVehicleModelDto,
  ): Promise<VehicleModel> {
    const model = this.vehicleModelRepository.create(createVehicleModelDto);
    return await this.vehicleModelRepository.save(model);
  }

  async findAll(): Promise<VehicleModel[]> {
    return await this.vehicleModelRepository.find({
      relations: ['brand'],
    });
  }

  async findOne(id: number): Promise<VehicleModel> {
    const model = await this.vehicleModelRepository.findOne({
      where: { id },
      relations: ['brand'],
    });
    if (!model) {
      throw new NotFoundException(`Modelo con id ${id} no encontrado`);
    }
    return model;
  }

  async update(
    id: number,
    updateVehicleModelDto: UpdateVehicleModelDto,
  ): Promise<VehicleModel> {
    const model = await this.findOne(id);
    Object.assign(model, updateVehicleModelDto);
    return await this.vehicleModelRepository.save(model);
  }

  async remove(id: number): Promise<void> {
    const model = await this.findOne(id);
    await this.vehicleModelRepository.remove(model);
  }
}
