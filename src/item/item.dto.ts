import { IsString, IsUUID, IsOptional, IsNumber } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Item } from './item.entity';

export class ItemDto implements Readonly<ItemDto> {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @Type(() => String)
  @Transform((value: string) => Number(value))
  @IsNumber()
  count: number;

  public static fromEntity(entity: Item) {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      count: entity.count
    } as ItemDto;
  }

  public static toEntity(item: ItemDto) {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      count: item.count
    } as Item;
  }
}
