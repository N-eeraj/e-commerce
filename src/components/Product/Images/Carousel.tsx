// react imports
import { FC, useEffect, useState } from 'react'

// shadcn/ui imports
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

// component imports
import SafeImage from '@components/SafeImage'

// type imports
import { ProductImagesProp } from '@customTypes/product'

const ProductImagesCarousel: FC<ProductImagesProp> = ({ images = [] }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (!api) return
    api.on('select', () => {
      setCurrentImage(api.selectedScrollSnap())
    })
  }, [api])

  const carouselProps = {
    setApi: setApi,
    opts: {
      loop: true,
    },
    plugins: [
      Autoplay({
        delay: 3000,
        active: true,
        stopOnInteraction: false,
      }),
    ],
  }

  return (
    <>
      <Carousel {...carouselProps} className="sm:hidden">
        <CarouselContent>
          { images.map((image, index) => 
              <CarouselItem className="h-auto min-h-60" key={index}>
                <SafeImage src={image} />
              </CarouselItem>
            )
          }
        </CarouselContent>
      </Carousel>
      { images.length > 1 && (
          <ul className="sm:hidden flex gap-x-2">
            { Array.from({ length: images.length }).map((_, index) => (
                <li
                  className={`h-2 rounded-full duration-300 ${ index === currentImage ? 'w-4 bg-primary/75' : 'w-2 bg-primary-foreground' }`}
                  key={index} />
              ))
            }
          </ul>
        )
      }
    </>
  )
}

export default ProductImagesCarousel
