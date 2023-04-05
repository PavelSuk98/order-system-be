import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from 'db/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentityDomain } from './domains/identity/identity-domain.module';
import { ProductModule } from './domains/product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    IdentityDomain,
    HttpModule,
    ProductModule,
    ProductCategoryModule,
    // OrderTableModule,
    // OrderModule,
    // ProductMeasureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
