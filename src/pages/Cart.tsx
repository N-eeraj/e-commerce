// react imports
import { FC } from 'react'

// component imports
import CartList from '@components/Cart/List'
import CartSummary from '@components/Cart/Summary'

const Cart: FC = () => {

  return (
    <section>
      <CartList />
      <CartSummary />
    </section>
  )
}

export default Cart
