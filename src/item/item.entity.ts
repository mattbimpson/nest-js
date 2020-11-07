import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  description: string;
}
