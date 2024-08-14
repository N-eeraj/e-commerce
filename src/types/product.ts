// type imports
import { ExtraProductData } from '@customTypes/appContext/extraProductData'
import Category from '@customTypes/category'

export type ProductImages = string[]

export interface ProductImagesProp {
  images: ProductImages
}

export default interface Product extends ExtraProductData {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: ProductImages
}
