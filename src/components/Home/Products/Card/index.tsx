// react imports
import { FC } from 'react'

// react router imports
import { Link } from 'react-router-dom'

// shadcn/ui imports
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '@ui/card'

// component imports
import ProductImageCarousel from '@components/Home/Products/Card/Carousel'

// hook imports
import { currencyFormat } from '@hooks/formatter'

// type imports
import Product from '@customTypes/product'

const ProductCard: FC<Product> = ({ id, title, images, price }) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group h-full overflow-hidden">
        <CardContent className="relative p-0">
          <ProductImageCarousel images={images} />
        </CardContent>
        <CardTitle className="w-full p-2 pb-0 text-lg text-ellipsis line-clamp-2 overflow-hidden">
          {title}
        </CardTitle>
        <CardDescription className="p-2 pt-0 font-semibold">
          {currencyFormat(price)}
        </CardDescription>
      </Card>
    </Link>
  )
}

export default ProductCard
