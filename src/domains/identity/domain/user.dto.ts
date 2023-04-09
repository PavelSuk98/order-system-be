import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class UserDTO {
  id!: string;

  userName!: string;

  email!: string;

  role!: Role;

  // constructor(user: UserEntity) {
  //   this.id = user.id;
  //   this.userName = user.userName;
  //   this.email = user.email;
  //   this.role = user.role;
  // }
}
