// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/components/ui/card'


// type imports
import SkeletonProps from '@customTypes/skeletonProps'

const CategoryCard: FC<SkeletonProps> = ({ length = 1, className }) => {
  return (
    Array.from({ length }).map((_, i) => 
      <Card className={`h-64 ${className} cursor-wait`} key={i}>
        <Skeleton className="size-full" />
      </Card>
    )
  )
}

export default CategoryCard
