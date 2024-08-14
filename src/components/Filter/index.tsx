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
    <aside className="md:sticky top-24 w-full md:w-1/4 md:max-w-64 md:h-[calc(100dvh-120px)]">
      <TitleActions onShowFilter={() => setShowFilter(true)} />

      <div className={`${!showFilter && 'max-sm:hidden'} max-sm:fixed max-sm:top-0 max-sm:left-0 flex flex-col gap-y-4 w-full h-screen md:h-[calc(100%-40px)] max-sm:p-2 bg-background z-50`}>
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

        <Price />
        <Category />
      </div>
    </aside>
  )
}

export default Filter
