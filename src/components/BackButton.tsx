// react imports
import { FC } from 'react'

// react router imports
import { useNavigate } from 'react-router-dom'

// shadcn/ui imports
import { Button } from '@ui/button'

// react icons imports
import { IoMdArrowRoundBack } from 'react-icons/io'

const BackButton: FC = () => {
  const navigate = useNavigate()

  return (
    <Button
      className="px-0"
      onClick={() => navigate(-1)}>
      <IoMdArrowRoundBack size="20" />
    </Button>
  )
}

export default BackButton
