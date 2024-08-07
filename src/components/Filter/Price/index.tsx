// react imports
import { FC } from 'react'

// component imports
import PriceSelect from '@components/Filter/Price/Select'

const Price: FC = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-base font-medium">
        Price
      </span>

      <div className="flex justify-between items-center">
        <PriceSelect />
        <span className="opacity-50">
          to
        </span>
        <PriceSelect />
      </div>
    </div>
  )
}

export default Price
