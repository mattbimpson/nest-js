import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './item.entity';
import { ItemRepository } from './item.repository';

@Injectable()
export class ItemService {
  constructor(@InjectRepository(Item) private readonly repo: ItemRepository) { }

  public async getAll() {
    return await this.repo.find();
  }
}
