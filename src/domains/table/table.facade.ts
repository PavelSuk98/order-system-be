import { Injectable } from '@nestjs/common';
import { ListItemModel } from '../shared/domain/list-item.interface';
import { CreateTableAreaDTO } from './models/create-table-area.dto';
import { TableAreaDTO } from './models/table-area.dto';
import { TableStateDTO } from './models/table-state.dto';
import { UpdateTableAreaDTO } from './models/update-table-area.dto';
import { TableAreaService } from './services/table-area.service';
import { TableStateService } from './services/table-state.service';
import { TableService } from './services/table.service';

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

  async findOneTableAreaDTO(id: string): Promise<TableAreaDTO | undefined> {
    const tableArea = await this.tableAreaService.findOne(id);
    if (!tableArea) {
      return undefined;
    }
    return new TableAreaDTO(tableArea);
  }
  async createTableArea(createDTO: CreateTableAreaDTO): Promise<TableAreaDTO> {
    const tableArea = await this.tableAreaService.create(createDTO);

    return this.findOneTableAreaDTO(tableArea.id);
  }

  async updateTableArea(updateDTO: UpdateTableAreaDTO): Promise<TableAreaDTO> {
    await this.tableAreaService.update(updateDTO);

    return this.findOneTableAreaDTO(updateDTO.id);
  }

  async deleteTableArea(id: string): Promise<void> {
    await this.tableAreaService.delete(id);
  }
}
