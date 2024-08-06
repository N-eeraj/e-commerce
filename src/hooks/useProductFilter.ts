// react router imports
import { useSearchParams } from 'react-router-dom'

// type imports
import ProductFilter from '@customTypes/productFilter'

const useProductFilter = (): ProductFilter => {
  const [searchParams] = useSearchParams()
  const {
    q: title,
    ...filterParams
  } = Object.fromEntries(searchParams)

  return {
    title,
    ...filterParams,
  }
}

export default useProductFilter
