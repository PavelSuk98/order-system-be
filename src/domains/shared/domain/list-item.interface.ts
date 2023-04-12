import { ApiProperty } from '@nestjs/swagger';

export class ListItemModel<T> {
  @ApiProperty()
  list: Array<T>;
}
