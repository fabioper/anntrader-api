import { ApiProperty } from '@nestjs/swagger'

export default class AddProductDto {
  @ApiProperty()
  name: string

  @ApiProperty({ nullable: true })
  image: string

  @ApiProperty()
  description: string

  @ApiProperty()
  price: number
}
