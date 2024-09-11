// react imports
import { FC } from 'react'

// shadcn/ui imports
import { TabsList, TabsTrigger } from '@ui/tabs'

// hook imports
import usePayment from '@hooks/payment/usePayment'

const PaymentTabList: FC = () => {
  const { steps } = usePayment()

  return (
    <TabsList className="sm:flex-col items-stretch w-full sm:max-w-xs h-fit p-1.5 sm:p-2">
      { steps.map(({ text, value, icon: Icon, disabled }) => (
          <TabsTrigger
            value={value}
            disabled={disabled}
            key={value}
            className="flex flex-col sm:flex-row sm:justify-start items-center gap-x-3 gap-y-2 flex-1 duration-300">
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

export default PaymentTabList
