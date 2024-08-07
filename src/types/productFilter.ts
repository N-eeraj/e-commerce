// react imports
import { MouseEventHandler } from 'react'

export default interface ProductFilter {
  title?: string
  categoryId?: number
  price_min?: number
  price_max?: number
  offset?: number
  limit?: number
  updateProductFilter: Function
  resetFilter: MouseEventHandler
}
