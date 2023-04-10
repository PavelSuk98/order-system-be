import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { RoleDTO } from './role.dto';
export class UserDTO implements User {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  firstName!: string;

  @ApiProperty()
  lastName!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  role: RoleDTO;

  @ApiProperty()
  createdDate: Date;

  @Exclude()
  password: string;

  @Exclude()
  isActive: boolean;

  @Exclude()
  roleId: string;

  constructor({ role, ...data }: Partial<UserDTO>) {
    Object.assign(this, data);

    if (role) {
      this.role = new RoleDTO(role);
    }
  }
}
