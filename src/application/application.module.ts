import { Module } from '@nestjs/common'
import { DomainModule } from '../domain/domain.module'
import { ProductsService } from './services/products.service'
import { InfrastructureModule } from '@/src/infrastructure/infrastructure.module'

@Module({
  imports: [DomainModule, InfrastructureModule],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ApplicationModule {}
