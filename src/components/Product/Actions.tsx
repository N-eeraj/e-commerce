// react imports
import { FC } from 'react'

// component imports
import { Button } from '@ui/button'

// type imports
import { ProductActionProps } from '@customTypes/product'

const ProductActions: FC<ProductActionProps> = ({ onAddToCart, onBuyNow }) => {
  return (
    <div className="max-sm:fixed max-sm:bottom-0 max-sm:left-0 flex self-start sm:gap-x-2 max-sm:w-full w-80 max-sm:h-12 sm:ml-28 bg-white">
      <Button
        className="flex-1 max-sm:h-full bg-primary-foreground hover:bg-primary/30 text-primary max-sm:rounded-none"
        onClick={onAddToCart}>
        Add To Cart
      </Button>
      <Button
        className="flex-1 max-sm:h-full max-sm:rounded-none"
        onClick={onBuyNow}>
        Buy Now
      </Button>
    </div>
  )
}

export default ProductActions
