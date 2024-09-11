// react imports
import {
  FC,
  useContext,
  useEffect,
} from 'react'

// react router imports
import { useNavigate } from 'react-router-dom'

// component imports
import PaymentContextProvider from '@components/Payment/ContextProvider'
import PaymentFlow from '@components/Payment'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// types imports
import { AppContextType } from '@customTypes/appContext'


const Payment: FC = () => {
  const { cartLength } = useContext(AppContext) as AppContextType
  const navigate = useNavigate()

  useEffect(() => {
    if (!cartLength) {
      navigate('/cart')
    }
  }, [cartLength])

  return (
    <PaymentContextProvider>
      <PaymentFlow />
    </PaymentContextProvider>
  )
}

export default Payment
