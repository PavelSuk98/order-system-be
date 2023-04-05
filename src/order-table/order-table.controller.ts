import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderTableService } from './order-table.service';
import { CreateOrderTableDto } from './dto/create-order-table.dto';
import { UpdateOrderTableDto } from './dto/update-order-table.dto';

@Controller('order-table')
export class OrderTableController {
  constructor(private readonly orderTableService: OrderTableService) {}

  @Post()
  create(@Body() createOrderTableDto: CreateOrderTableDto) {
    return this.orderTableService.create(createOrderTableDto);
  }

  @Get()
  findAll() {
    return this.orderTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderTableDto: UpdateOrderTableDto) {
    return this.orderTableService.update(+id, updateOrderTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderTableService.remove(+id);
  }
}
