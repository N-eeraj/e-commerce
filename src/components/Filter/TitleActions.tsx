// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Button } from '@ui/button'

// react icons imports
import { IoMdOptions } from 'react-icons/io'
import { MdClear } from 'react-icons/md'

// hoook imports
import useProductFilters from '@hooks/filter/useProductFilters'

// type imports
import { ProductFiltersTitleActionsProps } from '@customTypes/productFilters'

const TitleActions: FC<ProductFiltersTitleActionsProps> = ({ onShowFilter}) => {
  const { resetFilter } = useProductFilters()

  return (
    <div className="flex justify-between items-center max-sm:divide-x">
      <Button
        variant="ghost"
        className="sm:hidden flex gap-x-4 basis-1/2 text-lg text-primary-dark rounded-none"
        onClick={onShowFilter}>
        <IoMdOptions />
        <span>
          Filter
        </span>
      </Button>
      <span className="max-sm:hidden text-xl font-semibold">
        Filters
      </span>
      <Button
        variant="ghost"
        className="flex max-sm:gap-x-4 max-sm:basis-1/2 text-lg sm:text-xs text-primary-dark max-sm:rounded-none sm:uppercase"
        onClick={resetFilter}>
        <MdClear className="sm:hidden" />
        <span>
          Clear
        </span>
      </Button>
    </div>
  )
}

export default TitleActions
