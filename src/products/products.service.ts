import { Injectable } from '@nestjs/common'
import AddProductDto from '../../dtos/add-product.dto'

const products = [
  { id: '1', name: 'Produto 1' },
  { id: '2', name: 'Produto 2' },
  { id: '3', name: 'Produto 3' },
  { id: '4', name: 'Produto 4' },
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
