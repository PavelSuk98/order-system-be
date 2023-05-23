import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Put, UseGuards } from '@nestjs/common/decorators';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/domains/identity/decorators/role.decorator';
import { UserRoleEnum } from 'src/domains/identity/domain/role.enum';
import { RoleGuard } from 'src/domains/identity/infrastructure/role.guard';
import { ListItemModel } from 'src/domains/shared/domain/list-item.interface';
import { CreateTableDTO } from '../models/create-table.dto';
import { TableDetailDTO } from '../models/table-detail.dto';
import { TableDTO } from '../models/table.dto';
import { TableFacade } from '../table.facade';
@UseGuards(RoleGuard)
@Controller('v1/Service/Table')
@ApiTags('Service Table')
export class ServiceTableController {
  constructor(private readonly tableFacade: TableFacade) {}

  @Get()
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Service)
  @ApiResponse({ type: ListItemModel<TableDTO> })
  async findAll(): Promise<ListItemModel<TableDTO>> {
    return await this.tableFacade.findAllTableDTO();
  }

  @Get(':id')
  @Roles(UserRoleEnum.Admin, UserRoleEnum.Service)
  @ApiResponse({ type: TableDetailDTO })
  async findOne(@Param('id') id: string): Promise<TableDetailDTO> {
    return await this.tableFacade.findOneTableDTO(id);
  }
}
