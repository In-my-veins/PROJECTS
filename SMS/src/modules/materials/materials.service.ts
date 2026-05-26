import { Injectable } from '@nestjs/common';

@Injectable()
export class MaterialsService {
  getAll() {
    return [
      { name: 'Moisture Sensor', price: 12000 },
      { name: 'Water Pump', price: 25000 },
      { name: 'Solar Panel', price: 45000 },
    ];
  }
}