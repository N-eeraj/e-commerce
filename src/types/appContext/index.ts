// type imports
import { ReducerAction } from '@customTypes/common'
import ExtraProductDataHook from '@customTypes/appContext/extraProductData'

// constant imports
import { CART_REDUCER_TYPES } from '@/constants'

export interface CartItem {
  id: number
  quantity: number
  price: number
  originalPrice: number
}

export interface AppContextType extends ExtraProductDataHook {
  cart: CartItem[]
  cartLength: number
  cartDispatch: (arg: CartReducerAction) => void
}

export interface CartReducerAction extends ReducerAction {
  type: typeof CART_REDUCER_TYPES[keyof typeof CART_REDUCER_TYPES]
  id: number
  price?: number
  originalPrice?: number
  quantity?: number
}
