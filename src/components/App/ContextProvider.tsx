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
} from '@customTypes/appContext'

// type imports
import Children from '@customTypes/children'

const cartReducer = (cart: CartItem[], action: CartReducerAction): CartItem[] => {
  switch (action.type) {
    default:
      return cart
  }
}

export const AppContext = createContext({})

const ContextProvider: FC<Children> = ({ children }) => {
    const [cart, cartDispatch] = useReducer(cartReducer, [])
    const cartLength = cart.length
  
    const contextValues: AppContextType = {
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
