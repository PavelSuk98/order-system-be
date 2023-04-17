import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdentityDomain } from './domains/admin/identity/identity-domain.module';
import { PrismaService } from './prisma.service';
import { TableModule } from './domains/admin/table/table.module';
import { ServiceOrderModule } from './domains/service/order/order.module';
import { ProductModule } from './domains/admin/product/product.module';
import { ProductCategoryModule } from './domains/admin/product-category/product-category.module';
import { LogModule } from './domains/admin/logger/log.module';
import { PaymentModule } from './domains/admin/payment/payment.module';

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
    PaymentModule,
    ServiceOrderModule,
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
