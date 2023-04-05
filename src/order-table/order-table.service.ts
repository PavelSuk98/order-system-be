import { Injectable } from '@nestjs/common';
import { CreateOrderTableDto } from './dto/create-order-table.dto';
import { UpdateOrderTableDto } from './dto/update-order-table.dto';

@Injectable()
export class OrderTableService {
  create(createOrderTableDto: CreateOrderTableDto) {
    return 'This action adds a new orderTable';
  }

  findAll() {
    return `This action returns all orderTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderTable`;
  }

  update(id: number, updateOrderTableDto: UpdateOrderTableDto) {
    return `This action updates a #${id} orderTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderTable`;
  }
}
