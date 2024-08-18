// react imports
import { FC, useEffect } from 'react'

// component imports
import Product from '@components/FilteredProducts/Product'
import ProductSkeleton from '@skeletons/Product/Filtered'

// hook imports
import useFetchProductList from '@api/useFetchProductList'
import useProductFilters from '@hooks/filter/useProductFilters'

// type imports
import { ClassNameProp } from '@customTypes/common'

const FilteredProducts: FC<ClassNameProp> = ({ className }) => {
  const { products, isPending } = useFetchProductList(useProductFilters())

  useEffect(() => {
    if (products) {
      scrollTo(0, 0)
    }
  }, [products])

  return (
    <section className={`px-2 divide-y ${className}`}>
      {
        isPending ?
          <ProductSkeleton length={6} /> :
          products?.map(product => (
            <Product
              {...product}
              key={product.id} />
          ))
      }
    </section>
  )
}

export default FilteredProducts
