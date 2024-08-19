// react imports
import { FC } from 'react'

// react router imports
import { useParams } from 'react-router-dom'

// hook imports
import useFetchProduct from '@api/useFetchProduct'

const Product: FC = () => {
  const { id } = useParams()

  const { data, isPending } = useFetchProduct(Number(id))

  return (
    <>
      {JSON.stringify(data)}
    </>
  )
}

export default Product
