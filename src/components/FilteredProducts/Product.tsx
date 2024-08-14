// react imports
import { FC } from 'react'

// react router imports
import { Link } from 'react-router-dom'

// shadcn/ui imports
import { CardDescription } from '@ui/card'

// hook imports
import { currencyFormat } from '@hooks/formatter'

// type imports
import Product from '@/types/product'

// constant imports
import { FREE_DELIVERY_MIN_AMOUNT, SAVER_MIN_PERCENTAGE } from '@/constants'

const ProductCard: FC<Product> = ({ id, title, description, price, images, category, discount }) => {
  const originalPrice = Math.ceil(price * (1 + (discount ?? 0) / 100))

  return (
    <Link
      to={`/product/${id}`}
      className="group block py-8">
      <article className="flex gap-x-6">
        <img
          src={images[0] ?? ''}
          className="size-28 md:size-44 object-cover bg-gray-500 rounded-md" />

        <div className="flex max-sm:flex-col flex-1 gap-x-20 gap-y-2">
          <div className="flex flex-col flex-1 pt-1">
            <strong className="group-hover:text-primary text-lg font-medium duration-300">
              {title}
            </strong>
            <span className="text-slate-400 text-sm font-semibold">
              {category.name}
            </span>
            <CardDescription className="block mt-2 line-clamp-3">
              {description}
            </CardDescription>
          </div>

          <div className="flex flex-col gap-y-1 md:w-1/5">
            <div className="flex md:flex-col max-sm:items-center gap-x-2">
              <strong className="shrink-0 max-sm:order-1 text-xl md:text-2xl font-semibold">
                {currencyFormat(price)}
              </strong>
              { price !== originalPrice && (
                  <div className="flex max-sm:flex-row-reverse shrink-0 gap-x-2 md:gap-x-1.5 text-xl md:text-xs">
                    <span className="shrink-0 text-slate-500 line-through max-sm:font-medium">
                      {currencyFormat(originalPrice)}
                    </span>
                    <span className="shrink-0 text-green-700 font-semibold md:font-medium">
                      {discount}% off
                    </span>
                  </div>
                )
              }
            </div>
            { price >= FREE_DELIVERY_MIN_AMOUNT && (
              <small className="max-sm:order-1">
                Free Delivery
              </small>
            )
            }
            { discount && (discount > SAVER_MIN_PERCENTAGE) && (
                <small className="text-primary text-xs font-semibold">
                  Saver Deal
                </small>
              )
            }
          </div>
        </div>
      </article>
    </Link>
  )
}

export default ProductCard
