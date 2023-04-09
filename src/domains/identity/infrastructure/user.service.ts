import { LoginDTO } from '../domain/login.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDTO } from '../domain/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDTO } from '../domain/change-password.dto';
import { LoginResponseDTO } from '../domain/login-response.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}
  private async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        Role: true,
      },
    });
  }

  private async getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        Role: true,
      },
    });
  }

  async getUsers(): Promise<UserDTO[]> {
    const users = await this.prisma.user.findMany({
      include: { Role: true },
    });

    return users.map((user) => new UserDTO(user));
  }

  async changePassword(data: ChangePasswordDTO, response: any): Promise<void> {
    await this.prisma.user.update({
      where: {
        email: data.email,
      },
      data: {
        password: await bcrypt.hash(data.newPassword, 10),
      },
    });
    // const user = await this.getUserByEmail(data.email);
    // if (!user) {
    //   throw new BadRequestException('Invalid email');
    // }
    // const hashedPassword = await bcrypt.hash(data.newPassword, 10);
    // user.password = hashedPassword;
    // await this.usersRepository.save(user);
  }

  public async login(data: LoginDTO): Promise<LoginResponseDTO> {
    const user = await this.getUserByEmail(data.email);

    if (!user) {
      throw new BadRequestException('Invalid email');
    }

    // TODO: ENABLE, this ignore password requirment
    if (!(await bcrypt.compare(data.password, user.password))) {
      throw new BadRequestException();
    }

    const payload = { user: user, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.getUserByEmail(email);

    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    return null;
  }

  public async getUserInfo(id: string): Promise<UserDTO> {
    const user = await this.getUserById(id);

    if (!user) {
      throw new BadRequestException();
    }

    return new UserDTO(user);
  }
}
