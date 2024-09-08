// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Skeleton } from '@ui/skeleton'

const Page: FC = () => {
  return (
    <div className="flex max-sm:flex-col gap-x-6 gap-y-2 max-w-7xl mx-auto">
      <div className="flex flex-col items-center lg:items-end shrink-0 gap-y-3">

        {/* images list */}
        <div className="max-sm:hidden flex gap-x-4 max-md:w-full lg:h-80">
          <div className="shrink-0 md:flex md:flex-col h-full overflow-y-auto">
            { Array.from({ length: 3 }).map((_, index) => (
                <Skeleton
                  className="size-24 mb-1"
                  key={index} />
              ))
            }
          </div>
          <Skeleton className="shrink-0 w-80 h-full" />
        </div>

        {/* images carousel */}
        <div className="sm:hidden flex flex-col gap-y-3 w-full">
          <Skeleton className="w-full aspect-square" />
          <div className="flex justify-center gap-x-2">
            { Array.from({ length: 3 }).map((_, index) => (
                <Skeleton
                  className="size-2 rounded-full"
                  key={index} />
              ))
            }
          </div>
        </div>

        {/* actions */}
        <div className="max-sm:fixed max-sm:bottom-0 max-sm:left-0 flex self-start sm:gap-x-2 max-sm:w-full w-80 max-sm:h-12 sm:ml-28 bg-white z-10">
          <Skeleton className="flex-1 max-sm:h-full h-10 max-sm:rounded-none brightness-110" />
          <Skeleton className="flex-1 max-sm:h-full h-10 max-sm:rounded-none" />
        </div>
      </div>

      {/* description */}
      <div className="flex flex-col gap-y-2 flex-1 max-sm:pb-4">
        <Skeleton className="w-3/4 h-6 sm:h-9" />

        <div className="flex items-center gap-x-2">
          <Skeleton className="w-14 h-5" />
          <Skeleton className="w-20 h-5" />
        </div>

        <div className="flex items-baseline gap-x-2">
          <Skeleton className="w-12 h-7" />
          <div className="flex shrink-0 gap-x-2">
            <Skeleton className="w-12 h-6" />
            <Skeleton className="w-16 h-6" />
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <Skeleton className="w-11/12 h-4" />
          <Skeleton className="w-10/12 h-4" />
          <Skeleton className="w-3/4 h-4" />
        </div>
      </div>
    </div>
  )
}

export default Page
