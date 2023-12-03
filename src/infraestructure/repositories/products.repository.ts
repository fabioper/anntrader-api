import { Injectable } from '@nestjs/common'
import EntityRepository from '../../shared/entity-repository'
import Product from '../../domain/entities/product'

@Injectable()
export class ProductsRepository implements EntityRepository<Product> {
  private products: Product[]

  constructor() {
    this.products = [
      { id: '1', image: '', name: 'Produto 1', description: '', price: 0 },
      { id: '2', image: '', name: 'Produto 2', description: '', price: 0 },
      { id: '3', image: '', name: 'Produto 3', description: '', price: 0 },
      { id: '4', image: '', name: 'Produto 4', description: '', price: 0 },
      { id: '5', image: '', name: 'Produto 5', description: '', price: 0 },
    ]
  }

  async create(product: Product): Promise<void> {
    this.products.push(product)
  }

  async getById(productId: string): Promise<Product> {
    return this.products.find((product) => product.id === productId)
  }

  async remove(productId: string): Promise<void> {
    this.products = this.products.filter((product) => product.id !== productId)
  }

  async update(product: Product): Promise<void> {
    this.products = this.products.map((originalProduct) => {
      if (product.id !== originalProduct.id) {
        return originalProduct
      }

      return product
    })
  }

  async getAll(): Promise<Product[]> {
    return this.products
  }
}
