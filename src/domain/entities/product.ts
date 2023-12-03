import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  image?: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  price: number

  constructor(props: Omit<Product, 'id'>) {
    Object.assign(this, props)
  }
}
