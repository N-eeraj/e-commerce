// react imports
import {
  FC,
  useReducer,
  createContext,
} from 'react'

// hook imports
import useExtraProductData from '@hooks/context/useExtraProductData'

// type imports
import {
  AppContextType,
  CartItem,
  CartReducerAction,
} from '@customTypes/appContext'
import { Children } from '@customTypes/common'

// constant imports
import { CART_REDUCER_TYPES } from '@/constants'

// reducer function for cart updates
const cartReducer = (cart: CartItem[], { type, id, quantity, price, originalPrice }: CartReducerAction): CartItem[] => {
  switch (type) {
    case CART_REDUCER_TYPES.addItem:
      return [
        ...cart,
        {
          id,
          quantity: 1,
          price: price!,
          originalPrice: originalPrice!,
        },
      ]
    case CART_REDUCER_TYPES.removeItem:
      return cart.filter(item => item.id !== id)
    case CART_REDUCER_TYPES.updateItemCount:
      return cart.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity!,
          }
        }
        return item
      })
    default:
      console.warn(`Invalid action type: ${type}`)
      return cart
  }
}

export const AppContext = createContext({})

const ContextProvider: FC<Children> = ({ children }) => {
  const {
    extraProductData,
    findOrSetDiscount,
    findOrSetFeedback,
  } = useExtraProductData()
  const [cart, cartDispatch] = useReducer(cartReducer, [])
  const cartLength = cart.length

  const contextValues: AppContextType = {
    extraProductData,
    findOrSetDiscount,
    findOrSetFeedback,
    cart,
    cartDispatch,
    cartLength,
  }

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
