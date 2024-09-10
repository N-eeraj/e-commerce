// react imports
import { useContext } from 'react'

// component imports
import PaymentProfile from '@components/Payment/Profile'
import PaymentAddress from '@components/Payment/Address'
import PaymentProcessor from '@components/Payment/Processor'

// context imports
import { PaymentContext } from '@components/Payment/ContextProvider'

// react icons imports
import { FaUser, FaMoneyBill } from 'react-icons/fa'
import { HiMiniHome } from 'react-icons/hi2'

// type imports
import PaymentContextType, { PaymentTabContent } from '@customTypes/payment'

const tabContents: PaymentTabContent[] = [
  {
    component: PaymentProfile,
    value: 'profile',
  },
  {
    component: PaymentAddress,
    value: 'address',
  },
  {
    component: PaymentProcessor,
    value: 'payment',
  },
]

const usePayment = () => {
  const { isPhoneValid, address } = useContext(PaymentContext) as PaymentContextType

  const steps = [
    {
      text: 'Profile',
      value: 'profile',
      icon: FaUser,
    },
    {
      text: 'Delivery Address',
      value: 'address',
      icon: HiMiniHome,
      disabled: !isPhoneValid,
    },
    {
      text: 'Payment Options',
      value: 'payment',
      icon: FaMoneyBill,
      disabled: !address,
    },
  ]

  return {
    steps,
    tabContents,
  }
}

export default usePayment
