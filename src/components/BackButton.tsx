// react imports
import { FC } from 'react'

// react router imports
import { useNavigate } from 'react-router-dom'

// shadcn/ui imports
import { Button } from '@ui/button'

// react icons imports
import { IoMdArrowRoundBack } from 'react-icons/io'

// type imports
import BackButtonProps from '@customTypes/backButton'

const BackButton: FC<BackButtonProps> = ({ variant = 'default', size = 20, className, onClick }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    if (onClick) {
      onClick()
    }
    else {
      navigate(-1)
    }
  }

  return (
    <Button
      variant={variant}
      className={className}
      onClick={handleBack}>
      <IoMdArrowRoundBack size={size} />
    </Button>
  )
}

export default BackButton
