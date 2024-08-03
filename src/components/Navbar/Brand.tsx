// react imports
import { FC } from 'react'

// react router imports
import { Link } from 'react-router-dom'

// asset imports 
import logo from '@assets/logo.svg'

const Brand: FC = () => {
  return (
    <Link to="/" className="flex items-center gap-x-2 shrink-0 text-2xl font-semibold">
      <img src={logo} alt="logo" className="size-8" />
      <span>
        E-Commerce
      </span>
    </Link>
  )
}

export default Brand
