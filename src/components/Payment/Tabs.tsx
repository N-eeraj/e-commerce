// react imports
import { FC, useContext } from 'react'

// shadcn/ui imports
import {
  TabsList,
  TabsTrigger,
} from '@ui/tabs'

// react icons imports
import { HiPhone, HiMiniHome } from 'react-icons/hi2'
import { FaMoneyBill } from 'react-icons/fa'

// context imports
import { PaymentContext } from '@components/Payment/ContextProvider'

// type imports
import PaymentContextType from '@customTypes/payment'

const PaymentTabs: FC = () => {
  const { isPhoneValid, address } = useContext(PaymentContext) as PaymentContextType

  const steps = [
    {
      text: 'Phone Number',
      value: 'phone',
      icon: HiPhone,
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

  return (
    <TabsList className="sm:flex-col sm:items-stretch w-full sm:max-w-xs h-fit p-1.5 sm:p-2">
      { steps.map(({ text, value, icon: Icon, disabled }) => (
          <TabsTrigger
            value={value}
            disabled={disabled}
            key={value}
            className="flex flex-col sm:flex-row justify-start items-center gap-x-3 gap-y-2 flex-1 duration-300">
            <Icon className="text-xl sm:text-sm sm:opacity-75" />
            <span className="text-xs sm:text-base whitespace-break-spaces sm:whitespace-normal">
              {text}
            </span>
          </TabsTrigger>
          )
        )
      }
    </TabsList>
  )
}

export default PaymentTabs
