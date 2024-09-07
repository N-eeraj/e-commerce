// react imports
import { FC } from 'react'

// component imports
import ProductImagesCarousel from '@components/Product/Images/Carousel'
import ProductImagesList from '@components/Product/Images/List'


// type imports
import { ProductImagesProp } from '@customTypes/product'

const ProductImages: FC<ProductImagesProp> = ({ images = [] }) => {

  return (
    <>
      <ProductImagesCarousel images={images} />
      <ProductImagesList images={images} />
    </>
  )
}

export default ProductImages
