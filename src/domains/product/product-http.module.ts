import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogHttpModule } from '../logger/log-http.module';
import { ProductEntity } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), LogHttpModule],
  providers: [],
  exports: [],
})
export class ProductHttpModule {}
