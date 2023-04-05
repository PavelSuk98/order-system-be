import { Module } from '@nestjs/common';
import { ProductMeasureService } from './product-measure.service';
import { ProductMeasureController } from './product-measure.controller';

@Module({
  controllers: [ProductMeasureController],
  providers: [ProductMeasureService]
})
export class ProductMeasureModule {}
