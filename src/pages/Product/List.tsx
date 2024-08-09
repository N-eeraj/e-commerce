// react imports
import { FC } from 'react'

// component imports
import Filter from '@components/Filter'
import ProductList from '@components/FilteredProducts'

const Products: FC = () => {
  return (
    <section className="flex max-sm:flex-col gap-x-6 gap-y-4">
      <Filter />
      <ProductList className="flex-1" />
    </section>
  )
}

export default Products
