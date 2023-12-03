import { Injectable } from '@nestjs/common'
import AddProductDto from '../../shared/dtos/add-product.dto'
import Product from '../../domain/entities/product'
import { ProductsRepository } from '../../infraestructure/repositories/products.repository'

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async getAll() {
    return this.productsRepository.getAll()
  }

  async getById(productId: string) {
    return this.productsRepository.getById(productId)
  }

  async create(dto: AddProductDto) {
    const newProduct = new Product({
      id: 'hello',
      image: dto.image,
      price: dto.price,
      description: dto.description,
      name: dto.name,
    })

    return this.productsRepository.create(newProduct)
  }
}
