import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  estimate(size: number) {
    const sensors = Math.ceil(size / 50);

    return {
      sensors,
      pump: 1,
      solar: 1,
      totalCost: sensors * 12000 + 50000,
    };
  }
}