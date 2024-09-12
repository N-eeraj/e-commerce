// react imports
import { FC } from 'react'

// react router imports
import { useParams } from 'react-router-dom'

// component imports
import ProductDetails from '@components/Product'
import ProductPageSkeleton from '@skeletons/Product/Page'

// hooks imports
import useFetchProduct from '@api/useFetchProduct'

const Product: FC = () => {
  const { id } = useParams()

  const { data, isPending } = useFetchProduct(Number(id))

  if (isPending) {
    return <ProductPageSkeleton />
  }

  if (data) {   
    return <ProductDetails product={data} />
  }
}

export default Product
