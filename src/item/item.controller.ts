import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDto } from './item.dto';

@Controller('item')
export class ItemController {
  constructor(private service: ItemService) { }

  @Get()
  public async getAll(): Promise<ItemDto[]> {
    return await this.service.getAll();
  }
}
