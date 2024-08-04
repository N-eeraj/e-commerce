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

const Categories: FC = () => {
  const categories = [{"id": 1,"name": "Clothes","image": "https://i.imgur.com/QkIa5tT.jpeg","creationAt": "2024-08-03T17:38:12.000Z","updatedAt": "2024-08-03T17:38:12.000Z"},{"id": 2,"name": "Electronics","image": "https://i.imgur.com/ZANVnHE.jpeg","creationAt": "2024-08-03T17:38:12.000Z","updatedAt": "2024-08-03T17:38:12.000Z"},{"id": 3,"name": "Furniture","image": "https://i.imgur.com/Qphac99.jpeg","creationAt": "2024-08-03T17:38:12.000Z","updatedAt": "2024-08-03T17:38:12.000Z"},{"id": 4,"name": "Shoes","image": "https://i.imgur.com/qNOjJje.jpeg","creationAt": "2024-08-03T17:38:12.000Z","updatedAt": "2024-08-03T17:38:12.000Z"},{"id": 5,"name": "Miscellaneous","image": "https://i.imgur.com/BG8J0Fj.jpg","creationAt": "2024-08-03T17:38:12.000Z","updatedAt": "2024-08-03T17:38:12.000Z"}]

  return (
    <section className="flex flex-col gap-y-2 px-2 md:px-4">
      <h2 className="text-2xl text-primary-dark font-semibold">
        Categories
      </h2>
      <Carousel opts={{ loop: true }} className="px-12">
        <CarouselContent>
          { categories.map(category => 
            <CarouselItem className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5" key={category.id}>
              <CategoryCard {...category} />
            </CarouselItem>)
          }
        </CarouselContent>
        <CarouselPrevious className="left-0 text-primary border-primary hover:bg-primary-foreground" />
        <CarouselNext className="right-0 text-primary border-primary hover:bg-primary-foreground" />
      </Carousel>
    </section>
  )
}

export default Categories
