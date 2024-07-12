import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Service1 } from 'src/service1/service1.service';

@Controller('items') 
export class Controller1 {
  constructor(private readonly service1: Service1) {} 

  @Post()
  create(@Body() newItem: any): any { 
    return this.service1.addItem(newItem); 
  }

  @Get()
  findAll(): any[] { 
    return this.service1.getAllItems(); 
  }

  @Delete(':id')
  delete(@Param('id') id: string): void { 
    this.service1.clearItems(); 
  }
}
