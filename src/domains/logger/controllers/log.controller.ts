import { Controller, Get } from '@nestjs/common';
import {
  Body,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { LogFacade } from '../log.facade';
import { LogFilterDTO } from '../models/log-filter.dto';

@UseGuards(RoleGuard)
@Controller('v1/Admin/Log')
@ApiTags('Admin Log')
export class LogController {
  constructor(private readonly logFacade: LogFacade) {}

  @Post()
  @HttpCode(200)
  @Roles(UserRoleEnum.Admin)
  findAll(@Body() logFilter: LogFilterDTO) {
    return this.logFacade.findAll(logFilter);
  }
}
