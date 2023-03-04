import { Column, Entity } from 'typeorm'
import { Content } from './Content'

@Entity()
export class Photo extends Content{

  @Column()
  size!: string
}
