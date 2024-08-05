// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Skeleton } from '@ui/skeleton'
import {
  Card,
  CardContent,
  CardTitle,
} from '@ui/card'

// type imports
import SkeletonProps from '@customTypes/skeletonProps'

const Home: FC<SkeletonProps> = ({ length = 1 }) => {
  return (
    Array.from({ length }).map((_, i) => (
      <Card
        className="cursor-wait"
        key={i}>
        <CardContent className="p-0">
          <Skeleton className="w-full h-48" />
        </CardContent>
        <CardTitle className="flex flex-col gap-y-1 p-2 pb-0">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-1/2 h-4" />
        </CardTitle>
        <div className="p-2">
          <Skeleton className="w-16 h-3" />
        </div>
      </Card>
    ))
  )
}

export default Home
