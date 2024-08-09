// react imports
import { FC } from 'react'

// component imports
import ProductCard from '@components/Home/Products/Card'
import ProductHomeSkeleton from '@skeletons/Product/Home'

// hook imports
import useFetchProducts from '@api/useFetchProduct'

// type imports
import ClassNameProp from '@customTypes/classNameProp'

const fetchOption = { limit: 12 }

const Products: FC<ClassNameProp> = ({ className }) => {
  const { products, isPending } = useFetchProducts(fetchOption)

  return (
    <section className={`flex flex-col gap-y-2 px-2 md:px-4 ${className}`}>
      <h2 className="text-2xl text-primary-dark font-semibold">
        Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 self-center w-full max-w-4xl">
        { isPending ?
            <ProductHomeSkeleton length={12} /> :
            products?.map(product => (
              <ProductCard
                {...product}
                key={product.id} />
            ))
        }
      </div>
    </section>
  )
}

export default Products
