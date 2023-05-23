import { Injectable } from '@nestjs/common';
import { CreateTableAreaDTO } from './models/create-table-area.dto';
import { CreateTableDTO } from './models/create-table.dto';
import { TableAreaDetailDTO } from './models/table-area-detail.dto';
import { TableAreaDTO } from './models/table-area.dto';
import { TableDetailDTO } from './models/table-detail.dto';
import { TableStateDTO } from './models/table-state.dto';
import { TableDTO } from './models/table.dto';
import { UpdateTableAreaDTO } from './models/update-table-area.dto';
import { UpdateTableDTO } from './models/update-table.dto';
import { TableAreaService } from './services/table-area.service';
import { TableStateService } from './services/table-state.service';
import { TableService } from './services/table.service';
import { ListItemModel } from '@domains/shared/domain/list-item.interface';
import { ServiceTableDTO } from './models/service-table.dto';
import { table } from 'console';

@Injectable()
export class TableFacade {
  constructor(
    private readonly tableService: TableService,
    private readonly tableStateService: TableStateService,
    private readonly tableAreaService: TableAreaService,
  ) {}

  async findAllTableStates(): Promise<TableStateDTO[]> {
    return (await this.tableStateService.findAll()).map(
      (c) => new TableStateDTO(c),
    );
  }

  async findAllTableAreaDTO(): Promise<ListItemModel<TableAreaDTO>> {
    const tableAreas = await this.tableAreaService.findAll();

    return {
      list: tableAreas.map((c) => new TableAreaDTO(c)),
    };
  }

  async findOneTableAreaDTO(
    id: string,
  ): Promise<TableAreaDetailDTO | undefined> {
    const tableArea = await this.tableAreaService.findOne(id);
    if (!tableArea) {
      return undefined;
    }
    return new TableAreaDetailDTO(tableArea);
  }
  async createTableArea(
    createDTO: CreateTableAreaDTO,
  ): Promise<TableAreaDetailDTO> {
    const tableArea = await this.tableAreaService.create(createDTO);

    return this.findOneTableAreaDTO(tableArea.id);
  }

  async updateTableArea(
    updateDTO: UpdateTableAreaDTO,
  ): Promise<TableAreaDetailDTO> {
    await this.tableAreaService.update(updateDTO);

    return this.findOneTableAreaDTO(updateDTO.id);
  }

  async deleteTableArea(id: string): Promise<void> {
    await this.tableAreaService.delete(id);
  }

  async serviceFindAllTableDTO(): Promise<ListItemModel<ServiceTableDTO>> {
    const tables = await this.tableService.serviceFindAll();
    return {
      list: tables.map((c) => new ServiceTableDTO(c)),
    };
  }

  async findAllTableDTO(): Promise<ListItemModel<TableDTO>> {
    const tableAreas = await this.tableService.findAll();

    return {
      list: tableAreas.map((c) => new TableDTO(c)),
    };
  }

  async findOneTableDTO(id: string): Promise<TableDetailDTO | undefined> {
    const tableArea = await this.tableService.findOne(id);
    if (!tableArea) {
      return undefined;
    }
    return new TableDetailDTO(tableArea);
  }
  async createTable(createDTO: CreateTableDTO): Promise<TableDetailDTO> {
    const tableArea = await this.tableService.create(createDTO);

    return this.findOneTableDTO(tableArea.id);
  }

  async updateTable(updateDTO: UpdateTableDTO): Promise<TableDetailDTO> {
    await this.tableService.update(updateDTO);

    return this.findOneTableDTO(updateDTO.id);
  }

  async deleteTable(id: string): Promise<void> {
    await this.tableService.delete(id);
  }
}
