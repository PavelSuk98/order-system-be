import { Module } from '@nestjs/common';
import { AdminProductStateController } from './controllers/admin-product-state.controller';
import { AdminProductController } from './controllers/admin-product.controller';
import { ServiceProductController } from './controllers/service-product.controller';
import { ProductHttpModule } from './product-http.module';

@Module({
  imports: [ProductHttpModule],
  controllers: [
    AdminProductController,
    AdminProductStateController,
    ServiceProductController,
  ],
  providers: [],
})
export class ProductModule {}
