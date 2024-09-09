// react imports
import { FC, useContext } from 'react'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// type imports
import { AppContextType } from '@customTypes/appContext'

// component imports
import CartList from '@components/Cart/List'
import CartSummary from '@components/Cart/Summary'
import CartEmptyState from '@components/Cart/EmptyState'

const Cart: FC = () => {
  const { cart } = useContext(AppContext) as AppContextType

  if (!cart.length) {
    return <CartEmptyState />
  }

  return (
    <section className="flex justify-between items-start gap-x-12 p-4">
      <CartList className="flex-shrink-0" />
      <CartSummary />
    </section>
  )
}

export default Cart
