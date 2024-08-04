// react imports
import { FC } from 'react'

// component imports
import Categories from '@components/Home/Categories'
import Products from '@components/Home/Products'

const Home: FC = () => {
  return (
    <>
      <Categories />
      <Products className="mt-4 md:mt-8" />
    </>
  )
}

export default Home
