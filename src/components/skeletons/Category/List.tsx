// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Skeleton } from '@ui/skeleton'

const CategoryList: FC = () => {
  return (
    <div className="flex flex-col gap-y-2">
      { Array.from({ length: 5 }).map((_, i) => (
          <div
            className="flex gap-x-2"
            key={i}>
            <Skeleton className="size-4 rounded-full"  />
            <Skeleton className="w-full h-4"  />
          </div>
        ))
      }
    </div>
  )
}

export default CategoryList
