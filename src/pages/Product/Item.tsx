// react imports
import { FC } from 'react'

// react router imports
import { useParams } from 'react-router-dom'

// component imports
import ProductImages from '@components/Product/Images'
import ProductActions from '@components/Product/Actions'
import ProductDetails from '@components/Product/Details'
import ProductPageSkeleton from '@skeletons/Product/Page'

// hook imports
import useFetchProduct from '@api/useFetchProduct'

const Product: FC = () => {
  const { id } = useParams()

  const { data, isPending } = useFetchProduct(Number(id))

  if (isPending) {
    return <ProductPageSkeleton />
  }

  const handleAddToCart = () => {console.log('handleAddToCart')}
  const handleBuyNow = () => {console.log('handleBuyNow')}

  if (data) {   
    return (
      <div className="flex">
        <div className="flex flex-col">
          <ProductImages images={data.images} />
          <ProductActions
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow} />
        </div>
        <ProductDetails product={data} />
      </div>
    )
  }
}

export default Product
