import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'string' })
  description: string;
}
