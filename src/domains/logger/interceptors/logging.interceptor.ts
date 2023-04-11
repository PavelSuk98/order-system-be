import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PrismaService } from 'src/prisma.service';
import { getTypeIdFromHttpMethod, LogTypeEnum } from '../models/log-type.enum';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly prisma: PrismaService) {}
  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url: string = request.url;

    return next.handle().pipe(
      tap(async (data) => {
        const userId = request.user.userId;

        const ignoredLoggingURL = ['login', 'logout'];
        if (ignoredLoggingURL.find((c) => url.includes(c))) {
          return;
        }

        console.log(data);

        if (method !== 'GET' && data.id) {
          console.log('CREATING LOG FROM', data);
          await this.prisma.log.create({
            data: {
              createdById: userId,
              entityObject: data,
              entityId: data.id,
              typeId: getTypeIdFromHttpMethod(method),
            },
          });
        }
      }),
    );
  }
}
