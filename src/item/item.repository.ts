import { Repository, EntityRepository } from "typeorm";
import { Item } from "./item.entity";
import { Logger } from "@nestjs/common";

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  private logger = new Logger('ItemRepository');

  
}
