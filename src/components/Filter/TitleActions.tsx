// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Button } from '@ui/button'

// react icons imports
import { IoMdOptions } from 'react-icons/io'
import { MdClear } from 'react-icons/md'

// hoook imports
import useProductFilter from '@hooks/useProductFilter'

// type imports
import { ProductFilterTitleActionsProps } from '@customTypes/productFilter'

const TitleActions: FC<ProductFilterTitleActionsProps> = ({ onShowFilter}) => {
  const { resetFilter } = useProductFilter()

  return (
    <div className="flex justify-between items-center max-md:divide-x">
      <Button
        variant="ghost"
        className="md:hidden flex gap-x-4 basis-1/2 text-lg text-primary-dark rounded-none"
        onClick={onShowFilter}>
        <IoMdOptions />
        <span>
          Filter
        </span>
      </Button>
      <span className="max-md:hidden text-xl font-semibold">
        Filters
      </span>
      <Button
        variant="ghost"
        className="flex max-md:gap-x-4 max-md:basis-1/2 max-md:text-lg text-primary-dark max-md:rounded-none md:uppercase"
        onClick={resetFilter}>
        <MdClear className="md:hidden" />
        <span>
          Clear
        </span>
      </Button>
    </div>
  )
}

export default TitleActions
