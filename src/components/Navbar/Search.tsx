// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Input } from '@ui/input'

// hook imports
import useSearchBar from '@hooks/useSearchBar'

// type imports
import ClassNameProp from '@customTypes/classNameProp'

const Search: FC<ClassNameProp> = ({ className }) => {
  const { 
    inputEl,
    handleKeyPress,
  } = useSearchBar()

  return (
    <Input ref={inputEl} type="search" placeholder="Search Products" className={`text-primary-dark caret-primary ${className}`} onKeyDown={handleKeyPress} />
  )
}

export default Search
