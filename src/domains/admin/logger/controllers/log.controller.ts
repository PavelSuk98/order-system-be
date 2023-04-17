import { Controller, Get } from '@nestjs/common';
import {
  Body,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Log } from '@prisma/client';
import { Roles } from 'src/domains/admin/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/admin/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/admin/identity/infrastructure/role.guard';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { LogFacade } from '../log.facade';
import { LogFilterDTO } from '../models/log-filter.dto';

@UseGuards(RoleGuard)
@Controller('v1/Admin/Log')
@ApiTags('Admin Log')
export class LogController {
  constructor(private readonly logFacade: LogFacade) {}

  @Post('search')
  @HttpCode(200)
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: ListItemModel<Log> })
  async findAll(@Body() logFilter: LogFilterDTO) {
    return { list: await this.logFacade.findAll(logFilter) };
  }
}
