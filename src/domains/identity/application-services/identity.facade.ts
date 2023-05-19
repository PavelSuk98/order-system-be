import { Injectable } from '@nestjs/common';
import { ChangePasswordDTO } from '../domain/change-password.dto';
import { LoginResponseDTO } from '../domain/login-response.dto';
import { LoginDTO } from '../domain/login.dto';
import { UserDTO } from '../domain/user.dto';
import { UserService } from '../infrastructure/user.service';

@Injectable()
export class IdentityFacade {
  constructor(private userService: UserService) {}

  async changePassword(data: ChangePasswordDTO, response: any): Promise<void> {
    return await this.userService.changePassword(data, response);
  }

  async login(data: LoginDTO): Promise<LoginResponseDTO> {
    return await this.userService.login(data);
  }

  async getUserInfo(userId: string): Promise<UserDTO> {
    return await this.userService.getUserInfo(userId);
  }

  async getUsers(): Promise<UserDTO[]> {
    return await this.userService.getUsers();
  }
}
