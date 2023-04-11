import { ApiProperty } from '@nestjs/swagger';

export class DeleteResponseModel {
  @ApiProperty()
  id: string | number;
}
