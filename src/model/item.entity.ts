import { BaseEntity, Column } from "typeorm";

export class Item extends BaseEntity {
  @Column({ type: 'string' })
  description: string;
}
