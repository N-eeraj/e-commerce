// react router imports
import { useSearchParams } from 'react-router-dom'

// type imports
import ProductFilters, { PriceItem } from '@customTypes/productFilters'

// constant imports
import { PRICES } from '@/constants'

const usePrice = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const {
    price_min,
    price_max,
  } = Object.fromEntries(searchParams) as ProductFilters

  console.log({price_min, price_max})

  const minPrices: PriceItem[] = [
    {
      text: 'Min',
      value: null,
    },
    ...(PRICES.reduce((filtered: PriceItem[], price) => {
      if (!price_max || price < price_max) {
        filtered.push({
          text: price,
          value: price,
        })
      }
      return filtered
    }, []) as PriceItem[]),
  ]

  const maxPrices: PriceItem[] = [
    ...(PRICES.reduce((filtered: PriceItem[], price) => {
      if (!price_min || price > price_min) {
        filtered.push({
          text: price,
          value: price,
        })
      }
      return filtered
    }, []) as PriceItem[]),
    {
      text: 'Min',
      value: null,
    },
  ]

  return {
    minPrices,
    maxPrices,
  }
}

export default usePrice
