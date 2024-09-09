// react imports
import { FC, useRef } from 'react'

// shadcn/ui imports
import { Input } from '@ui/input'
import { toast } from 'sonner'

// react icons imports
import { FaMinus, FaPlus } from 'react-icons/fa6'

// type imports
import NumberFieldProps from '@/types/numberField'

const NumberField: FC<NumberFieldProps> = ({ value, min, max, className, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = () => {
    if (!inputRef.current) return
    let value = Number(inputRef.current.value)
    if (max !== undefined && value > Number(max)) {
      value = Number(max)
      toast.warning(`${max} is the max value`)
    }
    if (min !== undefined && value < Number(min)) {
      value = Number(min)
      toast.warning(`${min} is the min value`)
    }
    onChange(value)
  }

  return (
    <div className={`flex gap-x-1 bg-white rounded-md border-2 overflow-hidden ${className ?? ''}`}>
      <button
        disabled={Number(value) === Number(min)}
        className="grid place-content-center flex-shrink-0 w-1/4 aspect-square hover:bg-slate-100 disabled:bg-slate-100 disabled:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed duration-300"
        onClick={() => onChange(Number(value) - 1)}>
        <FaMinus size="12" />
      </button>
      <Input
        ref={inputRef}
        min={min}
        max={max}
        type="number"
        value={value}
        className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
        onChange={handleChange} />
        <button
          disabled={Number(value) === Number(max)}
          className="grid place-content-center flex-shrink-0 w-1/4 aspect-square hover:bg-slate-100 disabled:bg-slate-100 disabled:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed duration-300"
          onClick={() => onChange(Number(value) + 1)}>
          <FaPlus size="12" />
        </button>
    </div>
  )
}

export default NumberField
