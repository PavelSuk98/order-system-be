import { Module } from '@nestjs/common';
import { ProductStateController } from './controllers/product-state.controller';
import { ProductController } from './controllers/product.controller';
import { ProductHttpModule } from './product-http.module';

@Module({
  imports: [ProductHttpModule],
  controllers: [ProductController, ProductStateController],
  providers: [],
})
export class ProductModule {}
