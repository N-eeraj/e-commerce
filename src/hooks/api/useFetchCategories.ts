// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// type imports
import Category from '@customTypes/category'

const fetchCategories = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/categories')
  const data = await response.json() as Category[]
  return data
}

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
