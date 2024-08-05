// react imports
import { FC, useContext } from 'react'

// context imports
import { AppContext } from '@/App'

// react router imports
import { Link } from 'react-router-dom'

// shadcn/ui imports
import { Badge } from '@ui/badge'

// react icons imports
import { MdOutlineShoppingCart } from 'react-icons/md'

// type imports
import { AppContextType } from '@customTypes/appContext'

const Cart: FC = () => {
  const { cartLength } = useContext(AppContext) as AppContextType

  return (
    <Link
      to="/cart"
      className="flex items-center gap-x-1 text-lg">
      <div className="relative">
        <MdOutlineShoppingCart size="24" />
        { !!cartLength &&
          <Badge
            variant="secondary"
            className="absolute -top-2/3 scale-75">
            {cartLength}
          </Badge>
        }
      </div>
      <span>
        Cart
      </span>
    </Link>
  )
}

export default Cart
