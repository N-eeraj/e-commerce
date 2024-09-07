// react imports
import { FC } from 'react'

// component imports
import ProductImages from '@components/Product/Images'
import ProductActions from '@components/Product/Actions'
import ProductDetails from '@components/Product/Details'

// type imports
import { ProductProp } from '@customTypes/product'

const Product: FC<ProductProp> = ({ product }) => {
  return (
    <div className="flex max-sm:flex-col gap-x-6 gap-y-2 max-w-7xl mx-auto">
      <div className="flex flex-col items-center lg:items-end shrink-0 gap-y-3">
        <ProductImages images={product.images} />
        <ProductActions
          price={product.price}
          discount={product.discount} />
      </div>
      <ProductDetails product={product} />
    </div>
  )
}

export default Product
