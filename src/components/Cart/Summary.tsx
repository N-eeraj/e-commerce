// react imports
import { FC, useContext } from 'react'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// shadcn/ui imports
import { Button } from '@ui/button'

// hook imports
import { currencyFormat } from '@hooks/formatter'

// type imports
import { AppContextType } from '@customTypes/appContext'

const CartSummary: FC = () => {
  const { cartTotals } = useContext(AppContext) as AppContextType

  return (
    <div className="fixed sm:relative bottom-0 left-0 flex sm:flex-col max-sm:justify-between max-sm:items-center gap-y-2 w-full sm:max-w-sm p-2 sm:p-4 bg-primary sm:bg-primary-foreground max-sm:text-white sm:rounded">
      <strong className="max-sm:hidden">
        Cart Summary
      </strong>
      <div className="sm:hidden flex gap-x-1">
        <span>
          Total:
        </span>
        <strong>
          {currencyFormat(cartTotals.price)}
        </strong>
      </div>
      <Button className="bg-primary-foreground sm:bg-green-600 text-primary sm:text-white">
        Place Order
      </Button>
    </div>
  )
}

export default CartSummary
