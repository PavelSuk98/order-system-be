import { ApiProperty } from '@nestjs/swagger';
import { Log, Prisma, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class LogInfoDTO implements Log {
  id: string;
  entityId: string;
  logTypeId: string;
  createdByUserId: string;
  createdDate: Date;
  isActive: boolean;
  entityObject: Prisma.JsonValue;

  constructor(data: Partial<LogInfoDTO>) {
    // this.userId = data.createdBy.id;
    // this.firstName = data.createdBy.firstName;
    // this.lastName = data.createdBy.lastName;
    // this.email = data.createdBy.email;
    // this.createdDate = data.createdDate;
  }
}
