import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { UserRoleEnum } from '../domain/role.enum';

@Injectable()
export class RoleGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const permittedRoles = this.reflector.get<UserRoleEnum[]>(
      'roles',
      context.getHandler(),
    );

    if (!permittedRoles) {
      return true;
    }

    await super.canActivate(context);

    const jwtUserData = context.switchToHttp().getRequest().user;
    const userRoleId = jwtUserData.roleId as UserRoleEnum;

    if (!permittedRoles.includes(userRoleId)) {
      throw new ForbiddenException('Invalid role');
    }
    return true;
  }

  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
