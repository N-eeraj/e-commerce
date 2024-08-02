// react imports
import { useReducer } from 'react'

export interface AppContextType {
  cart: CartItem[]
  cartDispatch: Function
  cartLength: number
}
interface CartItem {
  id: number
}
interface CartReducerAction {
  type: string
  [key: string]: any
}

const cartReducer = (cart: CartItem[], action: CartReducerAction) => {
  switch (action.type) {
    default:
      return cart
  }
}

const useAppContext = (): AppContextType => {
  const [cart, cartDispatch] = useReducer(cartReducer, [])
  const cartLength = cart.length

  return {
    cart,
    cartDispatch,
    cartLength,
  }
}

export default useAppContext
