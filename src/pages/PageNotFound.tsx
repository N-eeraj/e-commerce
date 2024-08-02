// react imports
import { FC } from 'react'

// react router imports
import { useNavigate } from 'react-router'

// shadcn/ui imports
import { Button } from '@ui/button'

// component imports
import Navbar from '@/components/Navbar'

const PageNotFound: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <main className="h-dvh flex flex-col justify-center items-center gap-y-4">
        <Button onClick={() => navigate('/')}>
          Return Home
        </Button>
      </main>
    </>
  )
}

export default PageNotFound
