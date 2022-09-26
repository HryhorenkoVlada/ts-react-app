export interface ProductCreateDTO {
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