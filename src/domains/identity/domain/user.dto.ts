import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';

export class UserDTO {
  id!: string;

  firstName!: string;

  lastName!: string;

  email!: string;

  role!: Role;

  constructor(
    user: User & {
      Role: Role;
    },
  ) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.role = user.Role;
  }
}
