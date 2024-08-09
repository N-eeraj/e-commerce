// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// type imports
import Product from '@customTypes/product'
import { ApiOptions } from '@customTypes/api'

const fetchProducts = async ({ limit, offset, title, categoryId, price_min, price_max }: ApiOptions) => {
  let uri = `https://api.escuelajs.co/api/v1/products?offset=${offset || 0}`
  if (limit) {
    uri += `&limit=${limit}`
  }
  if (title) {
    uri += `&title=${title}`
  }
  if (categoryId) {
    uri += `&categoryId=${categoryId}`
  }
  if (price_min) {
    uri += `&price_min=${price_min}`
  }
  if (price_max) {
    uri += `&price_max=${price_max}`
  }
  const response = await fetch(uri)
  const data = await response.json() as Product[]
  return data
}

const useFetchProducts = (fetchOptions: ApiOptions) => {
  const { data: products, isPending } = useQuery({
    queryKey: ['products', fetchOptions],
    queryFn: () => fetchProducts(fetchOptions),
  })

  return {
    products,
    isPending,
  }
}

export default useFetchProducts
