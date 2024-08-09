// react imports
import { FC } from 'react'

// hook imports
import useFetchProducts from '@api/useFetchProduct'
import useProductFilters from '@hooks/filter/useProductFilters'

// type imports
import ClassNameProp from '@customTypes/classNameProp'

const FilteredProducts: FC<ClassNameProp> = ({ className }) => {
  const { products, isPending } = useFetchProducts(useProductFilters())

  return (
    <section className={`border ${className}`}>
      {!isPending && JSON.stringify(products)}
    </section>
  )
}

export default FilteredProducts
