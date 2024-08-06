// react imports
import { FC } from 'react'

// component imports
import CategoryCarousel from '@components/Home/Categories/Carousel'
import CategoryCardSkeleton from '@skeletons/Category/Card'

// hook imports
import useFetchCategories from '@hooks/useFetchCategories'

const Categories: FC = () => {
  const { categories, isPending }  = useFetchCategories()

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
