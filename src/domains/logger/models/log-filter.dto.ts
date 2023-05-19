import { ApiProperty } from '@nestjs/swagger';

export class LogFilterDTO {
  @ApiProperty()
  createdByUserId?: string;
  @ApiProperty()
  entityId?: string;
  @ApiProperty()
  logType?: string;
}
