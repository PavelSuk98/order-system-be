import { ApiProperty } from '@nestjs/swagger';
import { CreateTableAreaDTO } from './create-table-area.dto';

export class UpdateTableAreaDTO extends CreateTableAreaDTO {
  @ApiProperty()
  id: string;
}
