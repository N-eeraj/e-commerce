// react imports
import { FC, useContext } from 'react'

// react router imports
import { Link } from 'react-router-dom'

// shadcn/ui imports
import { Button } from '@ui/button'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// hooks imports
import { currencyFormat } from '@hooks/formatter'

// type imports
import { AppContextType } from '@customTypes/appContext'

const CartSummary: FC = () => {
  const { cartTotals } = useContext(AppContext) as AppContextType

  return (
    <div className="fixed sm:relative bottom-0 left-0 flex sm:flex-col max-sm:justify-between max-sm:items-center gap-y-4 w-full sm:max-w-sm p-2 sm:p-4 bg-primary sm:bg-primary-foreground/30 max-sm:text-white sm:border sm:border-primary-foreground sm:rounded">
      <strong className="max-sm:hidden text-xl">
        Cart Summary
      </strong>
      <div className="max-sm:hidden flex gap-x-1">
        <span>
          Actual Price:
        </span>
        <span>
          {currencyFormat(cartTotals.originalPrice)}
        </span>
      </div>
      <div className="max-sm:hidden flex gap-x-1">
        <span>
          Discount:
        </span>
        <span className="text-green-800 font-semibold">
          {currencyFormat(cartTotals.originalPrice - cartTotals.price)}
        </span>
      </div>
      <div className="flex gap-x-1">
        <span>
          Total:
        </span>
        <strong>
          {currencyFormat(cartTotals.price)}
        </strong>
      </div>

      <Link to="/payment">
        <Button className="w-full bg-primary-foreground sm:bg-green-600 hover:bg-white sm:hover:bg-green-500 text-primary sm:text-white sm:hover:scale-95 transition-all duration-300">
          Place Order
        </Button>
      </Link>
    </div>
  )
}

export default CartSummary
