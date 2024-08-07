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

// type imports
import { PriceSelectProps } from '@customTypes/productFilters'


const PriceSelect: FC<PriceSelectProps> = ({ options, selected, onChange }) => {
  return (
    <Select
      value={selected}
      onValueChange={onChange}>
      <SelectTrigger className="basis-1/3">
        <SelectValue>
          {selected}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        { options.map(({ text, value }) => (
            <SelectItem
              value={value as string}
              className="cursor-pointer"
              key={value}>
              {text}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}

export default PriceSelect
