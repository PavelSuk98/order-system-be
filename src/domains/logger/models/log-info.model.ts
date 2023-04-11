import { ApiProperty } from '@nestjs/swagger';
import { Log, Prisma, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class LogInfoDTO implements Log {
  @Exclude()
  id: string;

  @Exclude()
  typeId: string;

  @Exclude()
  productCategoryId: string;

  @Exclude()
  createdById: string;

  @Exclude()
  isActive: boolean;

  @Exclude()
  oldObject: Prisma.JsonValue;

  @Exclude()
  newObject: Prisma.JsonValue;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  createdDate: Date;

  @Exclude()
  createdBy: User;

  constructor(data: Partial<LogInfoDTO>) {
    this.userId = data.createdBy.id;
    this.firstName = data.createdBy.firstName;
    this.lastName = data.createdBy.lastName;
    this.email = data.createdBy.email;
    this.createdDate = data.createdDate;
  }
}
