import { Module } from '@nestjs/common'
import { ApiModule } from './api/api.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ApiModule],
})
export class AppModule {}
