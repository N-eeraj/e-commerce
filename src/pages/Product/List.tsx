// react imports
import { FC, useEffect } from 'react'

// react router imports
import { useSearchParams } from 'react-router-dom'

const Products: FC = () => {
  const [searchParams] = useSearchParams()
  const { q: searchQuery, category } = Object.fromEntries(searchParams)

  useEffect(() => {
    console.log(searchQuery)
    console.log(category)
  }, [])

  return (
    <>
      List
    </>
  )
}

export default Products
