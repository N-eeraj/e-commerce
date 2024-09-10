// react imports
import { FC } from 'react'

// react router imports
import { Link } from 'react-router-dom'

// shadcn/ui imports
import { Button } from '@ui/button'

// asset imports
import illustration from '@assets/empty-cart.svg'

const EmptyState: FC = () => {
  return (
    <section className="grid place-content-center justify-items-center gap-y-3 h-[85svh]">
      <img
        src={illustration}
        alt="decoration-illustration"
        className="size-48 md:size-80" />
      <p className="text-center text-primary-dark">
        No items in your cart
      </p>
      <Link to="/products">
        <Button>
          Browse Products
        </Button>
      </Link>
    </section>
  )
}

export default EmptyState
