import { Module } from '@nestjs/common'
import { DomainModule } from '../domain/domain.module'
import { ProductsService } from './services/products.service'
import { InfraestructureModule } from '../infraestructure/infraestructure.module'

@Module({
  imports: [DomainModule, InfraestructureModule],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ApplicationModule {}
