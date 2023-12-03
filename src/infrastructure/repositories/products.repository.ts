import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import EntityRepository from '@/src/shared/entity-repository'
import Product from '@/src/domain/entities/product'

@Injectable()
export class ProductsRepository implements EntityRepository<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async getAll(): Promise<Product[]> {
    return await this.repository.find()
  }

  async create(product: Product): Promise<void> {
    await this.repository.insert(product)
  }

  async getById(productId: string): Promise<Product> {
    return await this.repository.findOneBy({ id: productId })
  }

  async remove(productId: string): Promise<void> {
    await this.repository.delete(productId)
  }

  async update(product: Product): Promise<void> {
    await this.repository.update(product.id, product)
  }
}
