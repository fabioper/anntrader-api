import { Module } from '@nestjs/common'
import { ApplicationModule } from '../application/application.module'
import { ProductsController } from './controllers/products.controller'

@Module({
  controllers: [ProductsController],
  imports: [ApplicationModule],
})
export class ApiModule {}
