import { Module } from '@nestjs/common'
import { DomainModule } from '@/src/domain/domain.module'
import { ProductsRepository } from '@/src/infrastructure/repositories/products.repository'
import { TypeOrmModule } from '@nestjs/typeorm'
import Product from '@/src/domain/entities/product'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [
    DomainModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      async useFactory(config: ConfigService) {
        return {
          type: 'postgres',
          port: config.getOrThrow<number>('DB_PORT'),
          host: config.getOrThrow<string>('DB_HOST'),
          username: config.getOrThrow<string>('DB_USER'),
          password: config.getOrThrow<string>('DB_PASSWORD'),
          database: config.getOrThrow<string>('DB_DATABASE'),
          synchronize: true,
          entities: [Product],
          logging: true,
        }
      },
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  providers: [ProductsRepository, ConfigService],
  exports: [ProductsRepository],
})
export class InfrastructureModule {}
