import { Controller, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { TableStateDTO } from '../models/table-state.dto';
import { TableFacade } from '../table.facade';

@UseGuards(RoleGuard)
@Controller('v1/Admin/TableState')
@ApiTags('Admin Table State')
export class AdminTableStateController {
  constructor(private readonly tableFacade: TableFacade) {}

  @Get()
  @Roles(UserRoleEnum.Admin)
  @ApiResponse({ type: TableStateDTO, isArray: true })
  findAll(): Promise<TableStateDTO[]> {
    return this.tableFacade.findAllTableStates();
  }
}
