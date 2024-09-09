// react imports
import { FC } from 'react'

// component imports
import SafeImage from '@components/SafeImage'

// hook imports
import useFetchProduct from '@api/useFetchProduct'

// types imports
import { CartItem } from '@customTypes/appContext'

const Product: FC<CartItem> = ({ id, quantity, price, originalPrice }) => {
  const { data: product } = useFetchProduct(Number(id))
  if (!product) return

  return (
    <div>
      <SafeImage
        src={product.images[0]}
        alt={product.title}
        className="size-24" />
      <div> {product.title} </div>
      <div> {quantity} </div>
      <div> {price * quantity} </div>
      <div> {originalPrice * quantity} </div>
    </div>
  )
}

export default Product
