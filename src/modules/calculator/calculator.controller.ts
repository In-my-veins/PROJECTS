import { Controller, Get, Query } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private service: CalculatorService) {}

  @Get('estimate')
  estimate(@Query('size') size: string) {
    return this.service.estimate(Number(size));
  }
}