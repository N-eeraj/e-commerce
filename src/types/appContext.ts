// type imports
import { ReducerAction } from '@customTypes/common'

export interface ExtraProductInfo {
  rating: number
  reviews: number
  discount: number
}

export interface ExtraProductInfoStore {
  [id: number]: ExtraProductInfo
}

export interface CartItem {
  id: number
}

export interface AppContextType {
  extraProductInfo: ExtraProductInfoStore
  extraProductInfoDispatch: Function
  cart: CartItem[]
  cartDispatch: Function
  cartLength: number
}

export interface ExtraProductInfoReducer extends ReducerAction {
}

export interface CartReducerAction extends ReducerAction {
}
