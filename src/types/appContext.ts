export interface CartItem {
  id: number
}

export interface AppContextType {
  cart: CartItem[]
  cartDispatch: Function
  cartLength: number
}

export interface CartReducerAction {
  type: string
  [key: string]: any
}
