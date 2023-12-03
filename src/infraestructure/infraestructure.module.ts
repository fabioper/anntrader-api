import { Module } from '@nestjs/common'
import { DomainModule } from '../domain/domain.module'
import { ProductsRepository } from './repositories/products.repository'

@Module({
  imports: [DomainModule],
  providers: [ProductsRepository],
  exports: [ProductsRepository],
})
export class InfraestructureModule {}
