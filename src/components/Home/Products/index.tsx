// react imports
import { FC } from 'react'

// react router imports
import { Link } from 'react-router-dom'

// shadcn/ui imports
import { Card } from '@ui/card'
import { Skeleton } from '@ui/skeleton'

// component imports
import ProductCard from '@components/Home/Products/Card'
import ProductHomeSkeleton from '@skeletons/Product/Home'

// hooks imports
import useFetchProductList from '@api/useFetchProductList'

// react icons imports
import { IoMdArrowRoundForward } from 'react-icons/io'

// type imports
import { ClassNameProp } from '@customTypes/common'

const fetchOption = { limit: 11 }

const Products: FC<ClassNameProp> = ({ className }) => {
  const { products, isPending } = useFetchProductList(fetchOption)

  return (
    <section className={`flex flex-col gap-y-2 px-2 md:px-4 ${className}`}>
      <h2 className="text-2xl text-primary-dark font-semibold">
        Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 self-center w-full max-w-4xl">
        { isPending ?
            <>
              <ProductHomeSkeleton length={11} />
              <Skeleton className="w-full h-full" />
            </> :
            <>
              { products?.map(product => (
                  <ProductCard
                    {...product}
                    key={product.id} />
                ))
              }
              <Link to="/products">
                <Card className="group grid place-content-center justify-items-center gap-y-3 h-full min-h-64 hover:text-primary hover:bg-primary-foreground duration-300">
                  <strong>
                    View All Products
                  </strong>
                  <IoMdArrowRoundForward
                    size="32"
                    className="group-hover:translate-x-3 duration-300" />
                </Card>
              </Link>
            </>
        }
      </div>
    </section>
  )
}

export default Products
