import { Injectable } from '@nestjs/common';
import { Log, Prisma } from '@prisma/client';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { PrismaService } from 'src/prisma.service';
import { CreateLogModel } from '../models/create-log.model';
import { getTypeIdFromHttpMethod } from '../models/log-type.enum';
import { SearchLogModel } from '../models/search-log.model';

@Injectable()
export class LogService {
  constructor(private prisma: PrismaService) {}

  async create(log: CreateLogModel): Promise<void> {
    await this.prisma.log.create({
      data: {
        entityObject: log.entityObject,
        entityId: log.entityId,
        createdByUserId: log.createdByUserId,
        logTypeId: log.logType,
      },
    });
  }

  findAll(filter: SearchLogModel): Promise<Log[]> {
    return this.prisma.log.findMany({
      where: {
        ...(filter.createdByUserId && {
          createdByUserId: filter.createdByUserId,
        }),
        ...(filter.logType && {
          logTypeId: filter.logType,
        }),
        ...(filter.productCategoryId && {
          productCategoryId: filter.productCategoryId,
        }),
      },
    });
  }

  static async logInPrismaMiddleware(
    prisma: PrismaService,
    params: Prisma.MiddlewareParams,
    result: any,
  ): Promise<void> {
    const actionsToLog = ['create', 'update'];
    const dontLogThisEntities = ['Log'];

    if (dontLogThisEntities.includes(params.model)) {
      return;
    }

    // delete is implemented as soft delete, so action is replaced, but log should show delete
    if (actionsToLog.includes(params.action)) {
      await prisma.log.create({
        data: {
          createdByUserId: RoleGuard.currentUserId,
          entityObject: result,
          entityId: result.id,
          logTypeId: getTypeIdFromHttpMethod(params.action),
        },
      });
    }

    return;
  }
}
