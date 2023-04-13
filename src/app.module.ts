import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentityDomain } from './domains/identity/identity-domain.module';
import { ProductModule } from './domains/product/product.module';
import { ProductCategoryModule } from './domains/product-category/product-category.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaService } from './prisma.service';
import { LogModule } from './domains/logger/log.module';
import { TableModule } from './domains/table/table.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    IdentityDomain,
    HttpModule,
    ProductModule,
    ProductCategoryModule,
    LogModule,
    TableModule,
    // OrderTableModule,
    // OrderModule,
    // ProductMeasureModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
  ],
})
export class AppModule {}
