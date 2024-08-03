// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Input } from '@ui/input'

// type imports
import Props from '@customTypes/classNameProp'

const Search: FC<Props> = ({ className }) => {
  return (
    <Input placeholder="Search Products" className={`!ring-amber ${className}`} />
  )
}

export default Search
