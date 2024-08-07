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

export interface PriceItem {
  text: string | number
  value: string | number | null
}

export type PriceSelectChangeHandler = (value: string) => void

export interface PriceSelectProps {
  options: PriceItem[]
  selected: string
  onChange: PriceSelectChangeHandler
}

export interface ProductFiltersTitleActionsProps {
  onShowFilter: MouseEventHandler
}
