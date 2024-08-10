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

// reducer function for cart updates
const cartReducer = (cart: CartItem[], { type }: CartReducerAction): CartItem[] => {
  switch (type) {
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
    cartLength,
  }

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
