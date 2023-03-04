import { Entity, Column } from 'typeorm'
import { Content } from './Content'

@Entity()
export class Post extends Content{

  @Column()
  viewCount!: number
}
