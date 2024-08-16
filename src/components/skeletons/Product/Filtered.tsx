// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Skeleton } from '@ui/skeleton'

// type imports
import SkeletonProps from '@customTypes/skeletonProps'

const Filtered: FC<SkeletonProps> = ({ length = 1 }) => {
  return (
    Array.from({ length }).map((_, i) => (
      <article
        className="flex gap-x-6 py-8"
        key={i}>
        <Skeleton className="shrink-0 size-28 md:size-44 rounded-md" />

        <div className="flex max-sm:flex-col flex-wrap flex-1 gap-x-20 gap-y-2">
          <div className="flex flex-col gap-y-2 flex-1 pt-1">
            <Skeleton className="md:w-96 h-6" />
            <Skeleton className="md:hidden w-3/4 h-6" />
            <Skeleton className="w-28 md:w-36 h-4" />
            <Skeleton className="w-11/12 h-3 mt-2" />
            <Skeleton className="w-5/6 h-3" />
            <Skeleton className="w-full md:w-1/2 h-3" />
          </div>

          <div className="flex flex-col gap-y-1 md:w-1/5">
            <div className="flex md:flex-col gap-1 max-sm:items-center gap-x-2">
              <Skeleton className="max-md:w-7/12 h-6 md:h-8" />
              <Skeleton className="max-md:w-5/12 h-6 md:h-4" />
            </div>
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-16 h-3" />
          </div>
        </div>
      </article>
    ))
  )
}

export default Filtered
