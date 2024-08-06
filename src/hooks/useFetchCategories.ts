// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// hook imports
import { fetchCategories } from '@api/category'

const useFetchCategories = () => {
  const { data: categories, isPending } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })

  return {
    categories,
    isPending,
  }
}

export default useFetchCategories
