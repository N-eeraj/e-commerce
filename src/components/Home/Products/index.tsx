// react imports
import { FC } from 'react'

// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// component imports
import ProductCard from '@components/Home/Products/Card'

// hook imports
import { fetchProducts } from '@api/product'

// type imports
import ClassNameProp from '@customTypes/classNameProp'

const fetchOption = { limit: 12 }

const index: FC<ClassNameProp> = ({ className }) => {
  const { data: products, isPending } = useQuery({
    queryKey: ['products', fetchOption],
    queryFn: () => fetchProducts(fetchOption),
  })

  return (
    <section className={`flex flex-col gap-y-2 px-2 md:px-4 ${className}`}>
      <h2 className="text-2xl text-primary-dark font-semibold">
        Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 self-center max-w-4xl">
        { products?.map(product => (
            <ProductCard
              {...product}
              key={product.id} />)
          )
        }
      </div>
    </section>
  )
}

export default index
