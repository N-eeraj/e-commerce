// react imports
import { useReducer } from 'react'

// type imports
import {
  AppContextType,
  CartItem,
  CartReducerAction,
} from '@customTypes/appContext'

const cartReducer = (cart: CartItem[], action: CartReducerAction): CartItem[] => {
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
