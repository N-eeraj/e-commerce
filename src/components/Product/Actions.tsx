// react imports
import { FC, useContext } from 'react'

// react router imports
import { useNavigate, useParams } from 'react-router-dom'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// shadcn/ui imports
import { Button } from '@ui/button'

// type imports
import { AppContextType } from '@customTypes/appContext'
import { ProductActionProps } from '@customTypes/product'

// constant imports
import { CART_REDUCER_TYPES } from '@/constants'

const ProductActions: FC<ProductActionProps> = ({ price, discount }) => {
  const { cart, cartDispatch } = useContext(AppContext) as AppContextType
  const { id } = useParams()
  const navigate = useNavigate()
  const itemInCart = cart.some(item => item.id === Number(id))

  const originalPrice = Math.ceil(price * (1 + (discount ?? 0) / 100))

  const goToCart = () => navigate('/cart')

  const handleAddToCart = () => {
    cartDispatch({
      type: CART_REDUCER_TYPES.addItem,
      id: Number(id),
      price,
      originalPrice,
    })
  }
  const handleBuyNow = () => {
    if (!itemInCart) {
      handleAddToCart()
    }
    navigate('/payment')
  }

  return (
    <div className="max-sm:fixed max-sm:bottom-0 max-sm:left-0 flex self-start sm:gap-x-2 max-sm:w-full w-80 max-sm:h-12 sm:ml-28 bg-white">
      <Button
        className={`flex-1 max-sm:h-full max-sm:rounded-none ${itemInCart ? 'bg-green-600 hover:bg-green-700' : 'bg-primary-foreground hover:bg-primary/30 text-primary'}`}
        onClick={itemInCart ? goToCart : handleAddToCart}>
        {itemInCart ? 'Go To Cart' : 'Add To Cart'}
      </Button>
      <Button
        className="flex-1 max-sm:h-full max-sm:rounded-none"
        onClick={handleBuyNow}>
        {itemInCart ? 'Proceed To Payment' : 'Buy Now'}
      </Button>
    </div>
  )
}

export default ProductActions
