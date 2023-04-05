import { ApiProperty } from '@nestjs/swagger';
import { RoleEntity } from './role.entity';
import { UserEntity } from './user.entity';

export class UserDTO {
  id!: string;

  userName!: string;

  email!: string;

  role!: RoleEntity;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.userName = user.userName;
    this.email = user.email;
    this.role = user.role;
  }
}
