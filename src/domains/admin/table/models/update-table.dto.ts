import { ApiProperty } from '@nestjs/swagger';
import { CreateTableDTO } from './create-table.dto';

export class UpdateTableDTO extends CreateTableDTO {
  @ApiProperty()
  id: string;
}
