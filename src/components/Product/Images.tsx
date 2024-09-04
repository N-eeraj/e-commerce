// react imports
import { FC, useState } from 'react'

// type imports
import { ProductImagesProp } from '@customTypes/product'

const ProductImages: FC<ProductImagesProp> = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(images[0])

  return (
    <div className="flex gap-x-4 max-md:w-full lg:h-80">
      <div className="shrink-0 max-sm:hidden md:flex md:flex-col h-full overflow-y-auto">
        { images.map((image, index) => (
            <img
              src={image}
              className="size-24 hover:p-1 border-2 border-y-1 border-primary/25 hover:border-primary duration-100"
              key={index}
              onMouseOver={() => setCurrentImage(image)} />
          ))
        }
      </div>
      <img
        src={currentImage}
        className="shrink-0 w-full lg:w-auto h-full" />
    </div>
  )
}

export default ProductImages
