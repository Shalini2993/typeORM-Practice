import { Entity, Column } from 'typeorm'
import { Content } from './Content'

@Entity()
export class Question extends Content {

  @Column()
  quesCount!: string
}
