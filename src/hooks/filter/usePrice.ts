// react router imports
import { useSearchParams } from 'react-router-dom'

// type imports
import ProductFilters, {
  PriceItem,
  PriceSelectChangeHandler,
} from '@customTypes/productFilters'

// constant imports
import { PRICES } from '@/constants'

const filteredPrices = (filtered: PriceItem[], price: number, condition: Boolean) => {
  if (condition) {
    filtered.push({
      text: price,
      value: price,
    })
  }
  return filtered
}

const usePrice = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const {
    price_min,
    price_max,
  } = Object.fromEntries(searchParams) as ProductFilters

  const minPrices: PriceItem[] = [
    {
      text: 'Min',
      value: null,
    },
    ...(PRICES.reduce((filtered: PriceItem[], price) =>
      filteredPrices(filtered, price, !price_max || price < price_max),
      []
    )),
  ]

  const maxPrices: PriceItem[] = [
    ...(PRICES.reduce((filtered: PriceItem[], price) =>
      filteredPrices(filtered, price, !price_min || price > price_min),
      []
    )),
    {
      text: 'Max',
      value: null,
    },
  ]

  const setMinPrice: PriceSelectChangeHandler = value => {
    const price = JSON.parse(value)
    setSearchParams(prev => {
      if (price) {
        prev.set('price_min', price)
        return prev
      }
      const { price_min, ...queryParams } = Object.fromEntries(prev)
      return queryParams
    })
  }

  const setMaxPrice: PriceSelectChangeHandler = value => {
    const price = JSON.parse(value)
    setSearchParams(prev => {
      if (price) {
        prev.set('price_max', price)
        return prev
      }
      const { price_max, ...queryParams } = Object.fromEntries(prev)
      return queryParams
    })
  }

  return {
    price_min,
    price_max,
    minPrices,
    maxPrices,
    setMinPrice,
    setMaxPrice,
  }
}

export default usePrice
