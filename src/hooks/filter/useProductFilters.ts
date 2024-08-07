// react router imports
import { useSearchParams } from 'react-router-dom'

// type imports
import ProductFilters from '@customTypes/productFilters'

const useProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const filterParams = Object.fromEntries(searchParams) as ProductFilters

  const updateProductFilters = (queryKey: string, value: any) => {
    setSearchParams(prev => {
      prev.set(queryKey, value)
      return prev
    })
  }

  const resetFilter = () => setSearchParams()

  return {
    ...filterParams,
    updateProductFilters,
    resetFilter,
  }
}

export default useProductFilters
