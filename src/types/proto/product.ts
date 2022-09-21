export interface IProduct {
  // TODO: change id to number
  id: string
  name: string
  price: number
  manufacturer: string
  product_material: string
  year: number
  seller: string
  labels: string[]
  image?: string
  description: string
  color: string
}
