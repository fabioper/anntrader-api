import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductsService {
  getAll() {
    return [
      { name: 'Produto 1' },
      { name: 'Produto 2' },
      { name: 'Produto 3' },
      { name: 'Produto 4' },
    ]
  }
}
