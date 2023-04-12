import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaMiddlewareService } from './domains/shared/services/prisma-middleware.service';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();

    this.$use(async (params, next) => {
      const originalAction = params.action;
      console.log('PRIMSA USE TRACK');
      PrismaMiddlewareService.tryTransformToSoftDelete(params);

      const result = await next(params);

      PrismaMiddlewareService.tryCreateLogAboutRequest(
        this,
        params,
        result,
        originalAction,
      );

      return result;
    });
  }
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
