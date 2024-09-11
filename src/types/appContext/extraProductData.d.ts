// type imports
import { ReducerAction } from '@customTypes/common'

// constant imports
import { EXTRA_PRODUCT_INFO_TYPES } from '@/constants'

export interface Offer {
  discount: number
}

export interface Feedback {
  rating: number
  reviews: number
}

export interface ExtraProductDataReducerAction extends ReducerAction {
  type: typeof EXTRA_PRODUCT_INFO_TYPES[keyof typeof EXTRA_PRODUCT_INFO_TYPES]
  id: number
  value: Offer | Feedback
}

export interface ExtraProductData {
  discount?: number
  feedback?: Feedback
}

export interface ExtraProductDataStore {
  [id: number]: ExtraProductData
}

export default interface ExtraProductDataHook {
  extraProductData: ExtraProductDataStore
  findOrSetDiscount: Function
  findOrSetFeedback: Function
}
