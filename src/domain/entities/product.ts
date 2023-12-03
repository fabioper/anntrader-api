export default class Product {
  id: string
  image?: string
  name: string
  description: string
  price: number

  constructor(props: Product) {
    Object.assign(this, props)
  }
}
