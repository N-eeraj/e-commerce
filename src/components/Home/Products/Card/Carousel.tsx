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

// type imports
import { ProductImagesProp } from '@customTypes/product'

const ProductImageCarousel: FC<ProductImagesProp> = ({ images }) => {
  const [active, setActive] = useState(false)
  const [api, setApi] = useState<CarouselApi>()
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (!api) return
    api.on('select', () => {
      setActive(!active)
      setCurrentImage(api.selectedScrollSnap())
    })
    api.on('pointerDown', () => setActive(false))
  }, [api])

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
            active,
            stopOnInteraction: false,
          }),
        ]}>
        <CarouselContent>
          { images.map(image => 
              <CarouselItem key={image}>
                <img
                  src={image}
                  className="w-full h-48 bg-slate-500" />
              </CarouselItem>
            )
          }
        </CarouselContent>
      </Carousel>
      { images.length > 1 && (
          <ul className="absolute bottom-1 left-1/2 flex gap-x-2 -translate-x-1/2">
            { Array.from({ length: images.length }).map((_, index) => (
                <li
                  className={`size-2 border border-primary-foreground rounded-full ${ index === currentImage && 'bg-primary-foreground' }`}
                  key={index} />
                  )
                )
            }
          </ul>
        )
      }
    </>
  )
}

export default ProductImageCarousel
