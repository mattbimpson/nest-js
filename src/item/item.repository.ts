import { Repository, EntityRepository } from "typeorm";
import { Item } from "src/model/item.entity";
import { Logger } from "@nestjs/common";

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  private logger = new Logger('ItemRepository');

  getBaseQuery() {
    return this.createQueryBuilder('item').select(['item']);
  }
}
