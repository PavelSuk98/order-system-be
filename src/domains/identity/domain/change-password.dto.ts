import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDTO {
  @ApiProperty()
  public email!: string;

  // @ApiProperty()
  // public oldPassword!: string;

  @ApiProperty()
  public newPassword!: string;
}
