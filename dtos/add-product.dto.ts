import { ApiProperty } from '@nestjs/swagger'

export default class AddProductDto {
  @ApiProperty()
  title: string

  @ApiProperty()
  price: number
}
