import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { ItemRepository } from './item.repository';
import { ItemDto } from './item.dto';

@Injectable()
export class ItemService {
  constructor(@InjectRepository(Item) private readonly repo: ItemRepository) { }

  public async getAll(): Promise<ItemDto[]> {
    return await this.repo
      .find()
      .then(items => items.map(x => ItemDto.fromEntity(x)));
  }

  public async create(dto: ItemDto): Promise<ItemDto> {
    return this.repo
      .save(ItemDto.toEntity(dto))
      .then(x => ItemDto.fromEntity(x));
  }
}
