export interface IProduct {
  // TODO: change id to number
  id: string
  name: string
  description: string
  price: number
  manufacturer: string
  seller: string
  year: number
  product_material?: string
  labels?: string[]
  image?: string
  color?: string
}
