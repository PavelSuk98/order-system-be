import { Prisma } from '@prisma/client';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { PrismaService } from 'src/prisma.service';

//www.prisma.io/docs/concepts/components/prisma-client/middleware/soft-delete-middleware#step-3-optionally-prevent-readupdate-of-soft-deleted-records
export class PrismaMiddlewareService {
  public static tryTransformToSoftDelete(
    params: Prisma.MiddlewareParams,
  ): void {
    if (params.action == 'delete') {
      // Delete queries
      // Change action to an update
      params.action = 'update';
      params.args['data'] = { deleted: new Date() };

      console.log('converting to soft delete');
    }
    if (params.action == 'deleteMany') {
      // Delete many queries
      params.action = 'updateMany';
      if (params.args.data != undefined) {
        params.args.data['deleted'] = new Date();
      } else {
        params.args['data'] = { deleted: new Date() };
      }
    }
  }

  static async tryCreateLogAboutRequest(
    prisma: PrismaService,
    params: Prisma.MiddlewareParams,
    result: any,
    action: string,
  ): Promise<void> {
    const actionsToLog = ['create', 'update'];
    const dontLogThisEntities = ['Log'];

    if (dontLogThisEntities.includes(params.model)) {
      return;
    }

    if (actionsToLog.includes(params.action)) {
      await prisma.log.create({
        data: {
          createdByUserId: RoleGuard.currentUserId,
          entityObject: result,
          entityId: result.id,
          logType: action,
        },
      });
    }

    return;
  }
}
