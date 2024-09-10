// react imports
import { FC } from 'react'

// react router imports
import { useNavigate, useParams } from 'react-router-dom'

// shadcn/ui imports
import { Button } from '@ui/button'

// hook imports
import useProductActions from '@hooks/useProductActions'

// type imports
import { ProductActionProps } from '@customTypes/product'

const ProductActions: FC<ProductActionProps> = ({ price, discount }) => {
  const { id } = useParams()
  if (!id) return

  const navigate = useNavigate()
  const {
    isItemInCart,
    handleAddToCart,
    handleBuyNow,
  } = useProductActions(id, price, discount)

  const goToCart = () => navigate('/cart')

  return (
    <div className="max-sm:fixed max-sm:bottom-0 max-sm:left-0 flex self-start sm:gap-x-2 max-sm:w-full w-80 max-sm:h-12 sm:ml-28 bg-white">
      <Button
        className={`flex-1 max-sm:h-full max-sm:rounded-none ${isItemInCart ? 'bg-green-600 hover:bg-green-700' : 'bg-primary-foreground hover:bg-primary/30 text-primary'}`}
        onClick={isItemInCart ? goToCart : handleAddToCart}>
        {isItemInCart ? 'Go To Cart' : 'Add To Cart'}
      </Button>
      <Button
        className="flex-1 max-sm:h-full max-sm:rounded-none"
        onClick={handleBuyNow}>
        {isItemInCart ? 'Proceed To Payment' : 'Buy Now'}
      </Button>
    </div>
  )
}

export default ProductActions
