// react imports
import { FC } from 'react'

// type imports
import { ProductProp } from '@customTypes/product'

const ProductDetails: FC<ProductProp> = ({ product }) => {
  return (
    <div>
      {JSON.stringify(product)}
    </div>
  )
}

export default ProductDetails
