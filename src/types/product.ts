// react imports
import { MouseEventHandler } from 'react'

// type imports
import { ExtraProductData } from '@customTypes/appContext/extraProductData'
import Category from '@customTypes/category'

export type ProductImages = string[]

export interface ProductImagesProp {
  images: ProductImages
}

export interface ProductActionProps {
  onAddToCart: MouseEventHandler
  onBuyNow: MouseEventHandler
}

export default interface Product extends ExtraProductData {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: ProductImages
}

export interface ProductProp {
  product: Product
}
