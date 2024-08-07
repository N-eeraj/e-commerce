// react imports
import { MouseEventHandler } from 'react'

export default interface ProductFilters {
  title?: string
  categoryId?: number
  price_min?: number
  price_max?: number
  offset?: number
  limit?: number
}

export interface ProductFiltersHook extends ProductFilters {
  updateProductFilters: Function
  resetFilter: MouseEventHandler
}

export interface PriceItem {
  text: string | number
  value: string | number | null
}

export interface ProductFiltersTitleActionsProps {
  onShowFilter: MouseEventHandler
}
