// react imports
import { FC } from 'react'

// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// component imports
import CategoryCarousel from '@components/Home/Categories/Carousel'
import CategoryCardSkeleton from '@skeletons/CategoryCard'

// hook imports
import { fetchCategories } from '@api/category'

const Categories: FC = () => {
  const { data: categories, isPending } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })

  return (
    <section className="flex flex-col gap-y-2 px-2 md:px-4">
      <h2 className="text-2xl text-primary-dark font-semibold">
        Categories
      </h2>
      { isPending ?
          <div className="flex gap-x-4 overflow-hidden">
            <CategoryCardSkeleton
              className="shrink-0 basis-1/2 md:basis-1/4 lg:basis-1/5"
              length={5} />
          </div> :
          categories !== undefined && <CategoryCarousel categories={categories} />
      }
    </section>
  )
}

export default Categories
