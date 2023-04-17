import { SetMetadata } from '@nestjs/common';
import { UserRoleEnum } from '../domain/role.enum';

export const Roles = (...args: UserRoleEnum[]) => SetMetadata('roles', args);
