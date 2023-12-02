import { Controller, Get, NotFoundException, Param } from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  listProducts() {
    return this.productsService.getAll()
  }

  @Get(':id')
  getProductDetails(@Param('id') productId: string) {
    const productFound = this.productsService.getById(productId)
    if (!productFound) {
      throw new NotFoundException()
    }
    return productFound
  }
}
