import { Global, Module } from '@nestjs/common';
import { IdentityFacade } from './application-services/identity.facade';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'config/jwt.config';
import { UserService } from './infrastructure/user.service';
import { IdentityController } from './api/identity.controller';
import { JwtStrategy } from './infrastructure/jwt.strategy';
import { PrismaService } from 'src/prisma.service';

@Global()
@Module({
  imports: [PassportModule, JwtModule.registerAsync(jwtConfig)],
  controllers: [IdentityController],
  providers: [IdentityFacade, UserService, JwtStrategy, PrismaService],
  exports: [IdentityFacade],
})
export class IdentityDomain {}
