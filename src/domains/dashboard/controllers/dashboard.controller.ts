import { ListItemModel } from '@domains/shared/domain/list-item.interface';
import { Controller } from '@nestjs/common';
import {
  Body,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { DashboardFacade } from '../facades/dashboard.facade';
import { IncomeDTO } from '../models/income.model';

@UseGuards(RoleGuard)
@Controller('v1/Dashboard')
@ApiTags('Dashboard')
export class DashboardController {
  constructor(private readonly dashboardFacade: DashboardFacade) {}

  @Get('daily-income')
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Service)
  @ApiResponse({ type: IncomeDTO })
  async getDailyIncome(): Promise<IncomeDTO> {
    return this.dashboardFacade.getDailyIncome();
  }
}
