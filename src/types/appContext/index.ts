// type imports
import { ReducerAction } from '@customTypes/common'
import ExtraProductDataHook from '@customTypes/appContext/extraProductData'

export interface CartItem {
  id: number
}

export interface AppContextType extends ExtraProductDataHook {
  cart: CartItem[]
  cartLength: number
}

export interface CartReducerAction extends ReducerAction {
}
