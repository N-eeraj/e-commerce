// react imports
import { FC, useContext } from 'react'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// type imports
import { AppContextType } from '@customTypes/appContext'

const CartSummary: FC = () => {
  const { cartTotals } = useContext(AppContext) as AppContextType

  return (
    <div>
      CartSummary
      {JSON.stringify(cartTotals)}
    </div>
  )
}

export default CartSummary
