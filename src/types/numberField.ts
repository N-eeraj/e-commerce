// type imports
import { ClassNameProp } from '@customTypes/common'

export default interface NumberFieldProps extends ClassNameProp {
  value: number | string
  min?: number | string
  max?: number | string
  onChange: (value: number) => void
}
