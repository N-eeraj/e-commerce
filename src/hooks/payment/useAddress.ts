// react imports
import { useContext } from 'react'

// react hook form imports
import { SubmitHandler } from 'react-hook-form'

// context imports
import { PaymentContext } from '@components/Payment/ContextProvider'

// type imports
import PaymentContextType, { Address } from '@customTypes/payment'

// constant imports
import { PAYMENT_TAB_VALUES } from '@/constants'

const useAddress = () => {
  const {
    address,
    setAddress,
    setCurrentTab,
  } = useContext(PaymentContext) as PaymentContextType

  const submitAddress: SubmitHandler<Address> = (formData) => {
    setAddress(formData)
    setCurrentTab(PAYMENT_TAB_VALUES.payment)
  }

  return {
    address,
    submitAddress,
  }
}

export default useAddress
