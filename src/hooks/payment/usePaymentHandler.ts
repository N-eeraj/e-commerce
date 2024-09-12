// react imports
import { useContext } from 'react'

// react router imports
import { useNavigate } from 'react-router-dom'

// shadcn/ui imports
import { toast } from 'sonner'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// hooks imports
import { currencyFormat } from '@hooks/formatter'

// type imports
import { AppContextType } from '@customTypes/appContext'

// constant imports
import { CART_REDUCER_TYPES } from '@/constants'

const usePaymentHandler = () => {
  const {
    cartTotals,
    cartDispatch,
  } = useContext(AppContext) as AppContextType
  const navigate = useNavigate()

  const placeOrder = () => {
    navigate('/')
    toast.success('Your order has been placed successfully.')
    cartDispatch({ type: CART_REDUCER_TYPES.clearCart })
  }

  return {
    totalAmount: currencyFormat(cartTotals.price),
    placeOrder,
  }
}

export default usePaymentHandler
