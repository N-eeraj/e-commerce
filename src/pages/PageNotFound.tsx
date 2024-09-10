// react imports
import { FC } from 'react'

// react router imports
import { Link } from 'react-router-dom'

// shadcn/ui imports
import { Button } from '@ui/button'

// component imports
import NavBar from '@components/NavBar'

// asset imports
import illustration from '@assets/empty-cart.svg'

const PageNotFound: FC = () => {
  return (
    <>
      <NavBar type="logo" />
      <main className="h-dvh flex flex-col justify-center items-center gap-y-4 p-4">
        <img
          src={illustration}
          alt="decoration-illustration"
          className="size-48 md:size-80" />
        <p className="text-center text-primary-dark">
          Unfortunately we could not find the page you are looking for
        </p>
        <Link to="/">
          <Button>
            Return Home
          </Button>
        </Link>
      </main>
    </>
  )
}

export default PageNotFound
