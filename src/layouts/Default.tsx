// react imports
import { FC } from 'react'

// react router imports
import { Outlet } from 'react-router-dom'

// component imports
import Navbar from '@/components/Navbar'

const Default: FC = () => {
  return (
    <>
      <Navbar type="default" />
      <Outlet />
    </>
  )
}

export default Default
