// react imports
import { FC, useEffect } from 'react'

// react router imports
import { useSearchParams } from 'react-router-dom'

const Products: FC = () => {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') ?? ''

  useEffect(() => {
    console.log(searchQuery)
  }, [])

  return (
    <>
      List
    </>
  )
}

export default Products
