import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import AddProductDto from '../dtos/add-product.dto'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async listProducts() {
    return await this.productsService.getAll()
  }

  @Get(':id')
  async getProductDetails(@Param('id') productId: string) {
    const productFound = await this.productsService.getById(productId)
    if (!productFound) {
      throw new NotFoundException()
    }
    return productFound
  }

  @Post()
  async addProduct(@Body() dto: AddProductDto) {
    await this.productsService.create(dto)
  }
}
