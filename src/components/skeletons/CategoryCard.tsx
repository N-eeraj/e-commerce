// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Skeleton } from '@ui/skeleton'
import { Card } from '@ui/card'


// type imports
import SkeletonProps from '@customTypes/skeletonProps'

const CategoryCard: FC<SkeletonProps> = ({ length = 1, className }) => {
  return (
    Array.from({ length }).map((_, i) => 
      <Card className={`relative h-64 ${className} cursor-wait`} key={i}>
        <Skeleton className="size-full" />
        <Skeleton className="absolute bottom-2 left-2 w-3/4 h-4" />
      </Card>
    )
  )
}

export default CategoryCard
