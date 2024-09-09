// react imports
import { FC, useRef } from 'react'

// asset imports 
import placeholder from '@assets/placeholder.webp'

// type imports
import { SafeImageProps } from '@customTypes/common'

const SafeImage: FC<SafeImageProps> = ({ src, alt, className }) => {
  const productImage = useRef<HTMLImageElement | null>(null)

  const handleImageError = () => {
    if (!productImage.current) return
    productImage.current.src = placeholder
  }

  return (
    <img
      ref={productImage}
      src={src}
      alt={alt}
      className={className}
      onError={handleImageError} />
  )
}

export default SafeImage
