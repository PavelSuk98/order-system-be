import { Test, TestingModule } from '@nestjs/testing';
import { ProductMeasureService } from './product-measure.service';

describe('ProductMeasureService', () => {
  let service: ProductMeasureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductMeasureService],
    }).compile();

    service = module.get<ProductMeasureService>(ProductMeasureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
