// react import
import { useContext } from 'react'

// tanstack query imports
import { useQuery } from '@tanstack/react-query'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// type imports
import Product from '@customTypes/product'
import { AppContextType } from '@customTypes/appContext'

const fetchProduct = async (id: number) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  const data = await response.json() as Product
  return data
}

const useFetchProduct = (id: number) => {
  const {
    extraProductData,
    findOrSetFeedback,
    findOrSetDiscount,
  } = useContext(AppContext) as AppContextType

  const { data, isPending } = useQuery({
    queryKey: ['products', id],
    queryFn: () => fetchProduct(id),
    select: ({ id, ...product }) => {
      findOrSetFeedback(id)
      findOrSetDiscount(id)
      return {
        id,
        ...product,
        ...extraProductData[id],
      }
    }
  })

  return {
    data,
    isPending,
  }
}

export default useFetchProduct
