import { ClassSerializerInterceptor } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { Prisma } from '@prisma/client';
import { AppModule } from './app.module';
import { RoleGuard } from './domains/identity/infrastructure/role.guard';
import { LoggingInterceptor } from './domains/logger/interceptors/logging.interceptor';
import { getTypeIdFromHttpMethod } from './domains/logger/models/log-type.enum';
import { AdminProductCategoryController } from './domains/product-category/controllers/admin-product-category.controller';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  if (process.env.PRODUCTION) {
    app.enableCors({
      origin: '*',
    });
  }

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  Prisma.defineExtension({});
  // const prismaA = prismaService.$extends(extensionA);

  prismaService.$use(async (params, next) => {
    const result = await next(params);

    console.log('current user id', RoleGuard.currentUserId);

    // TODO Soft delete
    //www.prisma.io/docs/concepts/components/prisma-client/middleware/soft-delete-middleware#step-3-optionally-prevent-readupdate-of-soft-deleted-records

    // TODO Vyhodit realci na usera v LOG, LOG je nerelacni

    // TODO finish LOG, extract fnc

    // TODO pridat vyjimku at se na POST logu, nebo update, nebo delete nezacyklim, dalsim logem

    if (params.action === 'update' && RoleGuard.currentUserId) {
      console.log('result', result);
      console.log('params', params);
      console.log('next', next);
      // console.log('LOG', {
      //   createdById: RoleGuard.currentUserId,
      //   entityObject: result,
      //   entityId: result.id,
      //   typeId: getTypeIdFromHttpMethod(params.action),
      // });
      await prismaService.log.create({
        data: {
          createdById: RoleGuard.currentUserId,
          entityObject: result,
          entityId: result.id,
          typeId: getTypeIdFromHttpMethod(params.action),
        },
      });
    }
    // console.log('params', params);
    // console.log(
    //   `Query ${params.model}.${params.action} took ${after - before}ms`,
    // );

    return result;
  });

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  // app.useGlobalInterceptors(new LoggingInterceptor(prismaService));

  const config = new DocumentBuilder()
    .setTitle('Order system API')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

// function forUser(userId: number) {
//   return Prisma.defineExtension((prisma) =>
//     prisma.$extends({
//       query: {
//         $allModels: {
//           async $allOperations({ args, query }) {
//             const [, result] = await prisma.$transaction([
//               prisma.$executeRawSELECT set_config('app.current_user_id', ${userId.toString()}, TRUE),
//               query(args),
//             ]);
//             return result;
//           },
//         },
//       },
//     })
//   );
// }
