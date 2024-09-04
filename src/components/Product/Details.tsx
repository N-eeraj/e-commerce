// react imports
import { FC } from 'react'

// type imports
import { ProductProp } from '@customTypes/product'

const ProductDetails: FC<ProductProp> = ({ product }) => {
  return (
    <div className="flex-1">
      {/* {JSON.stringify(product)} */}
    </div>
  )
}

export default ProductDetails
