import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: String;

  @Column()
  category!: String;
}
