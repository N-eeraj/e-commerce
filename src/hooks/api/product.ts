// type imports
import Product from '@customTypes/product'
import { ApiOptions } from '@customTypes/api'

export const fetchProducts = async ({ limit, offset }: ApiOptions) => {
  let uri = `https://api.escuelajs.co/api/v1/products?offset=${offset || 0}`
  if (limit) {
    uri += `&limit=${limit}`
  }
  const response = await fetch(uri)
  const data = await response.json() as Product[]
  return data
}
