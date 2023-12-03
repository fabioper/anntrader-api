import { Injectable, NotFoundException } from '@nestjs/common'
import { ProductsRepository } from '@/src/infrastructure/repositories/products.repository'
import Product from '@/src/domain/entities/product'
import AddProductDto from '@/src/shared/dtos/add-product.dto'

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async getAll() {
    return this.productsRepository.getAll()
  }

  async getById(productId: string) {
    const product = await this.productsRepository.getById(productId)

    if (!product) {
      throw new NotFoundException()
    }

    return product
  }

  async create(dto: AddProductDto) {
    const newProduct = new Product({
      image: dto.image,
      price: dto.price,
      description: dto.description,
      name: dto.name,
    })

    return this.productsRepository.create(newProduct)
  }

  async remove(productId: string) {
    const product = await this.productsRepository.getById(productId)

    if (!product) {
      throw new NotFoundException()
    }

    return this.productsRepository.remove(productId)
  }
}
