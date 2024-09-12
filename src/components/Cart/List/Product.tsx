// react imports
import { FC, useContext } from 'react'

// shadcn/ui imports
import { toast } from 'sonner'

// component imports
import SafeImage from '@components/SafeImage'
import NumberField from '@components/NumberField'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// hooks imports
import useFetchProduct from '@api/useFetchProduct'
import { currencyFormat } from '@hooks/formatter'

// react icons imports
import { RiDeleteBin6Line } from 'react-icons/ri'

// types imports
import { CartItem } from '@customTypes/appContext'
import { AppContextType } from '@customTypes/appContext'

// constant imports
import { CART_REDUCER_TYPES } from '@/constants'

const Product: FC<CartItem> = ({ id, quantity, price, originalPrice }) => {
  const { data: product } = useFetchProduct(Number(id))
  if (!product) return

  const { cartDispatch } = useContext(AppContext) as AppContextType

  const handleChange = (value: number) => {
    cartDispatch({
      type: CART_REDUCER_TYPES.updateItemCount,
      id,
      quantity: value,
    })
  }

  const handleRemoveItem = () => {
    cartDispatch({ type: CART_REDUCER_TYPES.removeItem, id })
    toast('Removed item from cart')
  }

  return (
    <div className="flex gap-x-3 w-full p-2 sm:p-3 bg-primary-foreground/30 sm:border sm:border-primary-foreground rounded">
      <div className="flex flex-col gap-y-2 flex-shrink-0">
        <SafeImage
          src={product.images[0]}
          alt={product.title}
          className="size-24" />
        <NumberField
            value={quantity}
            min="1"
            max="10"
            onChange={handleChange} />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-start gap-x-1 w-full">
          <strong className="text-lg break-all">
            {product.title}
          </strong>
          <button
            className="mt-0.5 p-1 hover:bg-red-400 text-red-500 hover:text-white rounded-full duration-300"
            onClick={handleRemoveItem}>
            <RiDeleteBin6Line />
          </button>
        </div>
        <div className="flex items-baseline gap-x-2">
          <span className="text-sm">
            Subtotal:
          </span>
          <strong className="font-semibold">
            {currencyFormat(price * quantity)}
          </strong>
          <span className="text-slate-500 line-through max-sm:font-medium">
            {currencyFormat(originalPrice * quantity)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Product
