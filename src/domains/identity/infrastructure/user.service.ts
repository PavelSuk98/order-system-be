import { LoginDTO } from '../domain/login.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDTO } from '../domain/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDTO } from '../domain/change-password.dto';
import { LoginResponseDTO } from '../domain/login-response.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  private findOne(options: any): Promise<any | undefined> {
    return {} as any;

    // return this.usersRepository.findOne(options);
  }

  async getUsers(): Promise<UserDTO[]> {
    return {} as any;

    // const users = await this.usersRepository.find({ relations: ['role'] });

    // return users.map((user) => new UserDTO(user));
  }

  async changePassword(data: ChangePasswordDTO, response: any): Promise<void> {
    return {} as any;

    // const user = await this.findOne({ where: { email: data.email } });

    // if (!user) {
    //   throw new BadRequestException('Invalid email');
    // }

    // const hashedPassword = await bcrypt.hash(data.newPassword, 10);
    // user.password = hashedPassword;

    // await this.usersRepository.save(user);
  }

  public async login(data: LoginDTO): Promise<LoginResponseDTO> {
    return {} as any;
    const user = await this.findOne({
      where: { email: data.email },
      relations: ['role'],
    });

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

  async validateUser(username: string, pass: string): Promise<any> {
    return {} as any;

    // const user = await this.findOne({ where: { email: username } });

    // if (user && (await bcrypt.compare(pass, user.password))) {
    //   return user;
    // }
    // return null;
  }

  public async getUserInfo(id: string): Promise<UserDTO> {
    return {} as any;
    // const user = await this.findOne({ where: { id: id }, relations: ['role'] });

    // if (!user) {
    //   throw new BadRequestException();
    // }

    // return new UserDTO(user);
  }
}
