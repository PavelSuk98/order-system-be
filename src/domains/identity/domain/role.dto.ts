import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class RoleDTO implements Role {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @Exclude()
  deleted: Date | null;;

  constructor(role: Partial<RoleDTO>) {
    Object.assign(this, role);
  }
}
