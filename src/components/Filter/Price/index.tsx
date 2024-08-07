// react imports
import { FC } from 'react'

// component imports
import PriceSelect from '@components/Filter/Price/Select'

// hook imports
import usePrice from '@hooks/filter/usePrice'

const Price: FC = () => {
  const {
    price_min,
    price_max,
    minPrices,
    maxPrices,
    setMinPrice,
    setMaxPrice,
  } = usePrice()

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-base font-medium">
        Price
      </span>

      <div className="flex justify-between items-center">
        <PriceSelect
          selected={String(price_min || 'Min')}
          options={minPrices}
          onChange={setMinPrice} />
        <span className="opacity-50">
          to
        </span>
        <PriceSelect
          selected={String(price_max || 'Max')}
          options={maxPrices}
          onChange={setMaxPrice} />
      </div>
    </div>
  )
}

export default Price
