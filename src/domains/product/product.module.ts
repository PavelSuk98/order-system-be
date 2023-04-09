import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './infrastructure/product.service';
import { ProductHttpModule } from './product-http.module';

@Module({
  imports: [ProductHttpModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
