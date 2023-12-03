import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { ProductsService } from '../../application/services/products.service'
import AddProductDto from '../../shared/dtos/add-product.dto'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async listProducts() {
    return await this.productsService.getAll()
  }

  @Get(':id')
  async getProductDetails(@Param('id') productId: string) {
    return await this.productsService.getById(productId)
  }

  @Post()
  async addProduct(@Body() dto: AddProductDto) {
    await this.productsService.create(dto)
  }

  @Delete(':id')
  async deleteProduct(@Param('id') productId: string) {
    await this.productsService.remove(productId)
  }
}
