// react imports
import { FC, useState } from 'react'

// shadcn/ui imports
import { Button } from '@ui/button'

// component imports
import Category from '@components/Filter/Category'
import BackButton from '@components/BackButton'

// react icons imports
import { IoMdOptions } from 'react-icons/io'
import { MdClear } from 'react-icons/md'

// hoook imports
import useProductFilter from '@hooks/useProductFilter'

const Filter: FC = () => {
  const [showFilter, setShowFilter] = useState(false)
  const { resetFilter } = useProductFilter()

  return (
    <>
      <div className="flex divide-x">
        <Button
          variant="ghost"
          className="md:hidden flex gap-x-4 basis-1/2 text-primary-dark text-lg"
          onClick={() => setShowFilter(true)}>
          <IoMdOptions />
          <span>
            Filter
          </span>
        </Button>
        <Button
          variant="ghost"
          className="md:hidden flex gap-x-4 basis-1/2 text-primary-dark text-lg"
          onClick={resetFilter}>
          <MdClear />
          <span>
            Clear
          </span>
        </Button>
      </div>

      <aside className={`${!showFilter && 'max-md:hidden'} max-md:fixed max-md:top-0 max-md:left-0 flex flex-col gap-y-4 w-full md:w-1/4 md:max-w-80 max-md:h-dvh max-md:p-2 bg-background z-10`}>
        <div className="md:hidden flex items-center gap-x-3">
          <BackButton
            variant="ghost"
            size={20}
            className="p-0"
            onClick={() => setShowFilter(false)} />
          <strong className="text-lg">
            Filters
          </strong>
        </div>
        <Category />
      </aside>
    </>
  )
}

export default Filter
