export type ProductImages = string[]
export interface ProductImagesProp {
  images: ProductImages
}

export default interface Product {
  id: number
  title: string
  price: number
  description: string
  category: number
  images: ProductImages
}
