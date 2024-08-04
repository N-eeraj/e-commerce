// react imports
import { FC } from 'react'

// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// component imports
import CategoryCarousel from '@components/Home/Categories/Carousel'

// hook imports
import { fetchCategories } from '@api/category'

const Categories: FC = () => {
  const {  data: categories, isPending } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })

  return (
    <section className="flex flex-col gap-y-2 px-2 md:px-4">
      <h2 className="text-2xl text-primary-dark font-semibold">
        Categories
      </h2>
      { isPending ?
          <span> Loading </span> :
          categories !== undefined && <CategoryCarousel categories={categories} />
      }
    </section>
  )
}

export default Categories
