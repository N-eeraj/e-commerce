// react imports
import { FC } from 'react'

// shadcn/ui imports
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

// types imports
import { PaymentOption, PaymentOptionProps } from '@/types/payment'

const PaymentOptions: FC<PaymentOptionProps> = ({ value, options, onValueChange }) => {
  return (
    <RadioGroup
      value={value}
      onValueChange={(value: PaymentOption) => onValueChange(value)}>
      {options.map(({ text, value }) => (
        <Label
          key={value}
          className="flex items-center space-x-2">
          <RadioGroupItem value={value} />
          <span>
            {text}
          </span>
        </Label>
      ))}
    </RadioGroup>
  )
}

export default PaymentOptions
