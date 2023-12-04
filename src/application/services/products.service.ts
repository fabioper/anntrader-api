import { Injectable, NotFoundException } from '@nestjs/common'
import { ProductsRepository } from '@/src/infrastructure/repositories/products.repository'
import Product from '@/src/domain/entities/product'
import AddProductDto from '@/src/shared/dtos/add-product.dto'
import UpdateProductDto from '@/src/shared/dtos/update-product.dto'

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async getAll(query?: string) {
    return this.productsRepository.getAll(query)
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

  async update(productId: string, dto: UpdateProductDto) {
    const product = await this.productsRepository.getById(productId)
    if (!product) {
      throw new NotFoundException()
    }

    const updatedProduct = new Product({
      image: dto.image,
      price: dto.price,
      description: dto.description,
      name: dto.name,
    })

    return this.productsRepository.update(productId, updatedProduct)
  }
}
