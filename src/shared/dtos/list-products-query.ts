import { ApiProperty } from '@nestjs/swagger'

export class ListProductsQuery {
  @ApiProperty({ required: false })
  search?: string
}
