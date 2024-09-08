// react imports
import { FC } from 'react'

// hook imports
import { currencyFormat, numberFormat } from '@hooks/formatter'

// react icons imports
import { IoStar } from 'react-icons/io5'

// type imports
import { ProductProp } from '@customTypes/product'

const ProductDetails: FC<ProductProp> = ({ product }) => {
  const rating = product.feedback?.rating ?? 0
  let ratingColor = 'bg-green-600'
  if (rating < 1.5) {
    ratingColor = 'bg-red-500'
  } else if (rating < 2.5) {
    ratingColor = 'bg-orange-500'
  } else if (rating < 3.25) {
    ratingColor = 'bg-amber-500'
  } else if (rating < 4) {
    ratingColor = 'bg-yellow-500'
  }

  const originalPrice = Math.ceil(product.price * (1 + (product.discount ?? 0) / 100))

  return (
    <div className="flex flex-col gap-y-2 flex-1 max-sm:pb-4">
      <h1 className="text-xl sm:text-3xl font-bold sm:font-semibold line-clamp-3">
        {product.title}
      </h1>

      <div className="flex items-center gap-x-2">
        <div className={`flex justify-center items-center gap-x-1 px-2 py-0.5 ${ratingColor} text-white text-xs font-semibold rounded-sm`}>
          {rating}
          <IoStar className="scale-80" />
        </div>
        <span className="text-zinc-400 text-sm font-semibold">
          {numberFormat(product.feedback?.reviews ?? 0)}
        </span>
      </div>

      <div className="flex items-baseline gap-x-2">
        <strong className="shrink-0 text-xl font-bold">
          {currencyFormat(product.price)}
        </strong>
        { product.price !== originalPrice && (
            <div className="flex shrink-0 gap-x-2">
              <span className="shrink-0 text-slate-500 line-through">
                {currencyFormat(originalPrice)}
              </span>
              <span className="shrink-0 text-green-700 font-semibold">
                {product.discount}% off
              </span>
            </div>
          )
        }
      </div>

      <p className="text-xs md:text-sm text-gray-500">
        {product.description}
      </p>
    </div>
  )
}

export default ProductDetails
