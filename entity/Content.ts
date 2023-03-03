import { Entity, Column, PrimaryGeneratedColumn, TableInheritance } from 'typeorm'

@Entity()
@TableInheritance({column: {type:'varchar', name: 'type'}})
export abstract class Content {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: String

  @Column()
  desc!: String
}
