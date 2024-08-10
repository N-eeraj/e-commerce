// react imports
import {
  FC,
  useReducer,
  createContext,
} from 'react'

// type imports
import {
  AppContextType,
  CartItem,
  CartReducerAction,
  ExtraProductInfoStore,
  ExtraProductInfoReducer,
} from '@customTypes/appContext'

// type imports
import { Children } from '@customTypes/common'

// reducer function for cart updates
const cartReducer = (cart: CartItem[], action: CartReducerAction): CartItem[] => {
  switch (action.type) {
    default:
      return cart
  }
}

// reducer function for additional product data updates
const extraProductInfoReducer = (extraProductInfo: ExtraProductInfoStore, action: ExtraProductInfoReducer): ExtraProductInfoStore => {
  switch (action.type) {
    default:
      return extraProductInfo
  }
}

export const AppContext = createContext({})

const ContextProvider: FC<Children> = ({ children }) => {
  const [extraProductInfo, extraProductInfoDispatch] = useReducer(extraProductInfoReducer, {})
  const [cart, cartDispatch] = useReducer(cartReducer, [])
  const cartLength = cart.length

  const contextValues: AppContextType = {
    extraProductInfo,
    extraProductInfoDispatch,
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
