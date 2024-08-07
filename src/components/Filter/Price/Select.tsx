// react imports
import { FC } from 'react'

// shadcn/ui imports
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui/select'

// hook imports
import usePrice from '@hooks/filter/usePrice'


const PriceSelect: FC = () => {
  const { maxPrices, minPrices } = usePrice()
  console.log({maxPrices, minPrices})

  return (
    <Select>
      <SelectTrigger className="basis-1/3">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          value="light"
          className="cursor-pointer">
          Light
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default PriceSelect
