// react imports
import { FC, useEffect, useState } from 'react'

// shadcn/ui imports
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from '@ui/card'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

// react router imports
import { Link } from 'react-router-dom'

// hook imports
import { currencyFormat } from '@hooks/formatter'

const { id, title, price, images } = {
    "id": 1,
    "title": "Handmade Fresh Table",
    "price": 687,
    "images": [
      "https://i.imgur.com/yVeIeDa.jpeg",
      "https://i.imgur.com/jByJ4ih.jpeg",
      "https://i.imgur.com/KXj6Tpb.jpeg"
    ]
  }

const ProductCard: FC = () => {
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
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden">
        <CardContent className="relative p-0">
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
                      className="w-full" />
                  </CarouselItem>
                )
              }
            </CarouselContent>
          </Carousel>
          <ul className="absolute bottom-1 left-1/2 flex gap-x-2 -translate-x-1/2">
            { Array.from({ length: images.length }).map((_, index) => (
              <li
                className={`size-2 border border-primary-foreground rounded-full ${ index === currentImage && 'bg-primary-foreground' }`}
                key={index} />
            ))
            }
          </ul>
        </CardContent>
        <CardTitle className="p-2 pb-0 text-lg">
          {title}
        </CardTitle>
        <CardDescription className="p-2 pt-0 font-semibold">
          {currencyFormat(price)}
        </CardDescription>
      </Card>
    </Link>
  )
}

export default ProductCard
