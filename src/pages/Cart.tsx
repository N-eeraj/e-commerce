// react imports
import { FC } from 'react'

// component imports
import CartList from '@components/Cart/List'
import CartSummary from '@components/Cart/Summary'

const Cart: FC = () => {

  return (
    <section className="flex justify-between items-start max-w-6xl mx-auto py-4">
      <CartList className="flex-shrink-0" />
      <CartSummary />
    </section>
  )
}

export default Cart
