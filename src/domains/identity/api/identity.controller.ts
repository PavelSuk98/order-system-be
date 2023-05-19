import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Res,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { IdentityFacade } from '../application-services/identity.facade';
import { ChangePasswordDTO } from '../domain/change-password.dto';
import { LoginResponseDTO } from '../domain/login-response.dto';
import { LoginDTO } from '../domain/login.dto';
import { UserDTO } from '../domain/user.dto';
import { JwtAuthGuard } from '../infrastructure/jwt-auth.guard';

@ApiTags('Account')
@ApiBearerAuth()
@Controller('v1/Account')
export class IdentityController {
  constructor(private readonly identityFacade: IdentityFacade) {}

  @UseGuards(JwtAuthGuard)
  @Get('UserInfo')
  async getUserInfo(@Request() req: any): Promise<UserDTO> {
    return await this.identityFacade.getUserInfo(req.user.userId);
  }

  @Post('Login')
  @HttpCode(HttpStatusCode.Ok)
  async login(@Body() data: LoginDTO): Promise<LoginResponseDTO | void> {
    return await this.identityFacade.login(data);
  }

  @Get('Permissions')
  @HttpCode(HttpStatusCode.Ok)
  getPermissions(): { [key: string]: { [key: string]: number } } {
    return { '': { ADMIN: 1 } };
  }

  @Post('ChangePassword')
  @HttpCode(204)
  async changePassword(
    @Body() data: ChangePasswordDTO,
    @Res({ passthrough: true }) response: any,
  ): Promise<void> {
    await this.identityFacade.changePassword(data, response);
  }

  @Get('')
  @HttpCode(200)
  async getUsers(): Promise<UserDTO[]> {
    return await this.identityFacade.getUsers();
  }

  @Post('Logout')
  logout(@Res({ passthrough: true }) response: any): void {
    response.cookie('jwt', '', { expires: new Date() });
  }
}
