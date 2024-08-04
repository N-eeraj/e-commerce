// react imports
import { FC } from 'react'

// shadcn/ui imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@ui/carousel'

// component imports
import CategoryCard from '@components/Home/Categories/Card'

// type imports
import { CategoryListProp } from '@customTypes/category'

const CategoryCarousel: FC<CategoryListProp> = ({ categories }) => {
  return (
    <Carousel opts={{ loop: true }} className="min-h-64 px-12">
      <CarouselContent>
        { categories.map(category => 
            <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5" key={category.id}>
              <CategoryCard {...category} />
            </CarouselItem>
          )
        }
      </CarouselContent>
      <CarouselPrevious className="left-0 text-primary border-primary hover:bg-primary-foreground" />
      <CarouselNext className="right-0 text-primary border-primary hover:bg-primary-foreground" />
    </Carousel>
  )
}

export default CategoryCarousel
