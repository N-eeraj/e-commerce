// react imports
import { FC } from 'react'

// hooks imports
import usePaymentHandler from '@hooks/payment/usePaymentHandler'

const Card: FC = () => {
  const {
    totalAmount,
    placeOrder,
  } = usePaymentHandler()

  return (
    <div>Card</div>
  )
}

export default Card
