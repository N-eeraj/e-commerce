// react imports
import { FC, useState } from 'react'

// component imports
import TitleActions from '@components/Filter/TitleActions'
import BackButton from '@components/BackButton'
import Category from '@components/Filter/Category'
import Price from '@components/Filter/Price'

const Filter: FC = () => {
  const [showFilter, setShowFilter] = useState(false)

  return (
    <aside className="w-full md:w-1/4 md:max-w-80">
      <TitleActions onShowFilter={() => setShowFilter(true)} />

      <div className={`${!showFilter && 'max-md:hidden'} max-md:fixed max-md:top-0 max-md:left-0 flex flex-col gap-y-4 w-full max-md:h-dvh max-md:p-2 bg-background z-10`}>
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
        <Price />
      </div>
    </aside>
  )
}

export default Filter
