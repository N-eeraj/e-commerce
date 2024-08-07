// react router imports
import { useSearchParams } from 'react-router-dom'

// type imports
import ProductFilters, { ProductFiltersHook } from '@customTypes/productFilters'

const useProductFilters = (): ProductFiltersHook => {
  const [searchParams, setSearchParams] = useSearchParams()

  const {
    title,
    ...filterParams
  } = Object.fromEntries(searchParams) as ProductFilters

  const updateProductFilters = (queryKey: string, value: any) => {
    setSearchParams(prev => {
      prev.set(queryKey, value)
      return prev
    })
  }

  const resetFilter = () => {
    setSearchParams()
  }

  return {
    title,
    ...filterParams,
    updateProductFilters,
    resetFilter,
  }
}

export default useProductFilters
