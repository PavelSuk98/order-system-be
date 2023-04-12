import { Module } from '@nestjs/common';
import { AdminProductStateController } from './controllers/admin-product-state.controller';
import { AdminProductController } from './controllers/admin-product.controller';
import { ProductHttpModule } from './product-http.module';

@Module({
  imports: [ProductHttpModule],
  controllers: [AdminProductController, AdminProductStateController],
  providers: [],
})
export class ProductModule {}
