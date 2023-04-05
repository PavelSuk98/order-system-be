import { Test, TestingModule } from '@nestjs/testing';
import { ProductMeasureController } from './product-measure.controller';
import { ProductMeasureService } from './product-measure.service';

describe('ProductMeasureController', () => {
  let controller: ProductMeasureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductMeasureController],
      providers: [ProductMeasureService],
    }).compile();

    controller = module.get<ProductMeasureController>(ProductMeasureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
