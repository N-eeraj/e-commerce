// type imports
import Category from '@customTypes/category'

export const fetchCategories = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/categories?limit=5')
  const data = await response.json() as Category[]
  return data
}
