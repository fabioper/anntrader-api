import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { ProductsService } from '../../application/services/products.service'
import AddProductDto from '../../shared/dtos/add-product.dto'
import UpdateProductDto from '@/src/shared/dtos/update-product.dto'
import { ListProductsQuery } from '@/src/shared/dtos/list-products-query'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async listProducts(@Query() query?: ListProductsQuery) {
    return await this.productsService.getAll(query.search)
  }

  @Get(':id')
  async getProductDetails(@Param('id') productId: string) {
    return await this.productsService.getById(productId)
  }

  @Post()
  async addProduct(@Body() dto: AddProductDto) {
    await this.productsService.create(dto)
  }

  @Put(':id')
  async updateProduct(
    @Param('id') productId: string,
    @Body() dto: UpdateProductDto,
  ) {
    await this.productsService.update(productId, dto)
  }

  @Delete(':id')
  async deleteProduct(@Param('id') productId: string) {
    await this.productsService.remove(productId)
  }
}
