// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Button } from '@ui/button'

// hooks imports
import usePaymentHandler from '@hooks/payment/usePaymentHandler'

const COD: FC = () => {
  const {
    totalAmount,
    placeOrder,
  } = usePaymentHandler()

  return (
    <div className="flex flex-col sm:items-start gap-y-2">
      <p className="text-sm">
        The payment of {totalAmount} will be collected at the time of delivery.
      </p>
      <Button onClick={placeOrder}>
        Place Order
      </Button>
    </div>
  )
}

export default COD
