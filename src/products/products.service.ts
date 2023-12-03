import { Injectable } from '@nestjs/common'
import AddProductDto from '../dtos/add-product.dto'
import Product from '../models/product'

const products: Product[] = [
  { id: '1', image: '', name: 'Produto 1', description: '', price: 0 },
  { id: '2', image: '', name: 'Produto 2', description: '', price: 0 },
  { id: '3', image: '', name: 'Produto 3', description: '', price: 0 },
  { id: '4', image: '', name: 'Produto 4', description: '', price: 0 },
  { id: '5', image: '', name: 'Produto 5', description: '', price: 0 },
]

@Injectable()
export class ProductsService {
  async getAll() {
    return products
  }

  async getById(productId: string) {
    return products.find((product) => product.id === productId)
  }

  async create(dto: AddProductDto) {}
}
