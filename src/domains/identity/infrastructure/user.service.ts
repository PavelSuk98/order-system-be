import { LoginDTO } from '../domain/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDTO } from '../domain/user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ChangePasswordDTO } from '../domain/change-password.dto';
import { UserEntity } from '../domain/user.entity';
import { LoginResponseDTO } from '../domain/login-response.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  private findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  private findOne(options: any): Promise<UserEntity | undefined> {
    return this.usersRepository.findOne(options);
  }

  async getUsers(): Promise<UserDTO[]> {
    const users = await this.usersRepository.find({ relations: ['role'] });

    return users.map((user) => new UserDTO(user));
  }

  async changePassword(data: ChangePasswordDTO, response: any): Promise<void> {
    const user = await this.findOne({ where: { email: data.email } });

    if (!user) {
      throw new BadRequestException('Invalid email');
    }

    // if (!await bcrypt.compare(data.oldPassword, user.password)) {
    //   throw new BadRequestException('Incorrect password.');
    // }

    user.updatedBy = user.userName;
    user.updatedDate = new Date();
    const hashedPassword = await bcrypt.hash(data.newPassword, 10);
    user.password = hashedPassword;

    await this.usersRepository.save(user);
    // return await this.accountService.changePassword(data, response);
  }

  public async login(data: LoginDTO): Promise<LoginResponseDTO> {
    const user = await this.findOne({ where: { email: data.email } });

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
    const user = await this.findOne({ where: { email: username } });

    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    return null;
  }

  public async getUserInfo(id: string): Promise<UserDTO> {
    const user = await this.findOne({ where: { id: id }, relations: ['role'] });

    if (!user) {
      throw new BadRequestException();
    }

    return new UserDTO(user);
  }
}
