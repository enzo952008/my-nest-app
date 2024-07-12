import { Controller, Post, Body } from '@nestjs/common';
import { Service2 } from '../service2/service2.service';

@Controller('service2')
export class Controller2 {
  constructor(private readonly service2: Service2) {}

  @Post('sum')
  sum(@Body() payload: { numbers: number[] }): number {
    return this.service2.sum(payload.numbers);
  }

  @Post('findMax')
  findMax(@Body() payload: { numbers: number[] }): number {
    return this.service2.findMax(payload.numbers);
  }

  @Post('filterEvenNumbers')
  filterEvenNumbers(@Body() payload: { numbers: number[] }): number[] {
    return this.service2.filterEvenNumbers(payload.numbers);
  }
}


