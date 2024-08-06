// react router imports
import { useSearchParams } from 'react-router-dom'

// type imports
import ProductFilter from '@customTypes/productFilter'

const useProductFilter = (): ProductFilter => {
  const [searchParams, setSearchParams] = useSearchParams()

  const {
    q: title,
    ...filterParams
  } = Object.fromEntries(searchParams)

  const updateProductFilter = (queryKey: string, value: any) => {
    setSearchParams(prev => {
      prev.set(queryKey, value)
      return prev
    })
  }

  return {
    title,
    ...filterParams,
    updateProductFilter,
  }
}

export default useProductFilter
