import { TypeOrmModule } from '@nestjs/typeorm';
import { Global, Module } from '@nestjs/common';
import { IdentityFacade } from './application-services/identity.facade';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'config/jwt.config';
import { UserEntity } from './domain/user.entity';
import { RoleEntity } from './domain/role.entity';
import { UserService } from './infrastructure/user.service';
import { IdentityController } from './api/identity.controller';
import { JwtStrategy } from './infrastructure/jwt.strategy';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RoleEntity]),
    PassportModule,
    JwtModule.registerAsync(jwtConfig),
  ],
  controllers: [IdentityController],
  providers: [IdentityFacade, UserService, JwtStrategy],
  exports: [IdentityFacade],
})
export class IdentityDomain {}
