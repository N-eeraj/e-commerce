// react imports
import { FC } from 'react'

// component imports
import Product from '@components/FilteredProducts/Product'

// hook imports
import useFetchProducts from '@api/useFetchProduct'
import useProductFilters from '@hooks/filter/useProductFilters'

// type imports
import { ClassNameProp } from '@customTypes/common'

const FilteredProducts: FC<ClassNameProp> = ({ className }) => {
  const { products, isPending } = useFetchProducts(useProductFilters())

  return (
    <section className={`px-2 divide-y ${className}`}>
      { products?.map(product => (
          <Product
            {...product}
            key={product.id} />
        ))
      }
    </section>
  )
}

export default FilteredProducts
