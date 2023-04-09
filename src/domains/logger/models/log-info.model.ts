import { ApiProperty } from '@nestjs/swagger';

export class LogInfoDTO {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  createdDate: Date;

  // constructor(entity: LogEntity) {
  //   this.userId = entity.createdBy.id;
  //   this.userName = entity.createdBy.userName;
  //   this.email = entity.createdBy.email;
  //   this.createdDate = entity.createdDate;
  // }
}
