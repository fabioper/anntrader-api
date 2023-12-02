import { Injectable } from '@nestjs/common'

const products = [
  { id: '1', name: 'Produto 1' },
  { id: '2', name: 'Produto 2' },
  { id: '3', name: 'Produto 3' },
  { id: '4', name: 'Produto 4' },
]

@Injectable()
export class ProductsService {
  getAll() {
    return products
  }

  getById(productId: string) {
    return products.find((product) => product.id === productId)
  }
}
