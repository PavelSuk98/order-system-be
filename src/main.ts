import { ClassSerializerInterceptor } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { LogService } from './domains/logger/services/log.service';
import { PrismaMiddlewareService } from './domains/shared/services/prisma-middleware.service';
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

  prismaService.$use(async (params, next) => {
    const originalAction = params.action;
    PrismaMiddlewareService.tryTransformToSoftDelete(params);

    const result = await next(params);

    PrismaMiddlewareService.tryCreateLogAboutRequest(
      prismaService,
      params,
      result,
      originalAction,
    );

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
