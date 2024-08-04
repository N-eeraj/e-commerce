// react imports
import { FC } from 'react'

// shadcn/ui imports
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from '@ui/card'

// react router imports
import { Link } from 'react-router-dom'

// hook imports
import { currencyFormat } from '@hooks/formatter'

const { id, title, price, images } = {
    "id": 1,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
    "images": [
      "https://i.imgur.com/yVeIeDa.jpeg",
      "https://i.imgur.com/jByJ4ih.jpeg",
      "https://i.imgur.com/KXj6Tpb.jpeg"
    ]
  }

const ProductCard: FC = () => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <img src={images[0]} className="w-full" />
        </CardContent>
        <CardTitle className="p-2 pb-0 text-lg">
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
