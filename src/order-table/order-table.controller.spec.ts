import { Test, TestingModule } from '@nestjs/testing';
import { OrderTableController } from './order-table.controller';
import { OrderTableService } from './order-table.service';

describe('OrderTableController', () => {
  let controller: OrderTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderTableController],
      providers: [OrderTableService],
    }).compile();

    controller = module.get<OrderTableController>(OrderTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
