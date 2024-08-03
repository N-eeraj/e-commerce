// react imports
import { FC } from 'react'

// react router imports
import { Outlet, useNavigate } from 'react-router-dom'

// shadcn/ui imports
import { Button } from '@ui/button'

// react icons imports
import { IoMdArrowRoundBack } from 'react-icons/io'

const BackAction: FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <nav className="fixed top-0 flex items-center w-full min-h-16 p-1 bg-primary">
        <Button className="px-2" onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack size="20" />
        </Button>
      </nav>
      <Outlet />
    </>
  )
}

export default BackAction
