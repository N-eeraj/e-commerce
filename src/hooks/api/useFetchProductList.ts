// react import
import { useContext } from 'react'

// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// type imports
import Product from '@customTypes/product'
import { ApiOptions } from '@customTypes/api'
import { AppContextType } from '@customTypes/appContext'

const fetchProductList = async ({ limit, offset, title, categoryId, price_min, price_max }: ApiOptions) => {
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

const useFetchProductList = (fetchOptions: ApiOptions) => {
  const {
    extraProductData,
    findOrSetDiscount,
  } = useContext(AppContext) as AppContextType

  const { data: products, isPending } = useQuery({
    queryKey: ['products', fetchOptions],
    queryFn: () => fetchProductList(fetchOptions),
    select: products => products
      .map(({ id, ...data }) => {
        findOrSetDiscount(id)
        return {
          id,
          ...data,
          ...extraProductData[id],
        }
      })
  })

  return {
    products,
    isPending,
  }
}

export default useFetchProductList
