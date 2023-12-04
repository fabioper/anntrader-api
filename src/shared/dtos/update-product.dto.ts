import { ApiProperty } from '@nestjs/swagger'

export default class UpdateProductDto {
  @ApiProperty()
  name: string

  @ApiProperty({ nullable: true })
  image: string

  @ApiProperty()
  description: string

  @ApiProperty()
  price: number
}
