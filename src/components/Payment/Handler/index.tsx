// react imports
import { FC, useState } from 'react'

// component imports
import PaymentOptions from '@components/Payment/Handler/Options'
import UPI from '@components/Payment/Handler/UPI'
import COD from '@components/Payment/Handler/COD'
import Card from '@components/Payment/Handler/Card'

// types imports
import { PaymentOption } from '@customTypes/payment'

// constants imports
import { PAYMENT_OPTIONS } from '@/constants'

const paymentHandlers: Record<PaymentOption, FC> = {
  upi: UPI,
  cod: COD,
  card: Card,
}

const Handler: FC = () => {
  const [paymentOption, setPaymentOption] = useState<PaymentOption>(PAYMENT_OPTIONS[0].value)
  const PaymentHandlerComponent = paymentHandlers[paymentOption]

  return (
    <div className="flex flex-col gap-x-8 gap-y-4 md:flex-row divide-y md:divide-x md:divide-y-0">
      <PaymentOptions
        value={paymentOption}
        options={PAYMENT_OPTIONS}
        onValueChange={option => setPaymentOption(option)} />

      <div className="pt-4 md:pt-0 md:pl-8">
        <PaymentHandlerComponent />
      </div>
    </div>
  )
}

export default Handler
