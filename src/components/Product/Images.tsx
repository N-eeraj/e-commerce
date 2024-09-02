// react imports
import { FC } from 'react'

// type imports
import { ProductImagesProp } from '@customTypes/product'

const ProductImages: FC<ProductImagesProp> = ({ images = [] }) => {
  return (
    <div className="flex">
      <div className="max-sm:hidden flex">
        { images.map((image, index) => (
            <img
              src={image}
              className="size-32"
              key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductImages
