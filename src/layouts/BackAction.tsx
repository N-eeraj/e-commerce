// react imports
import { FC } from 'react'

// react router imports
import { Outlet } from 'react-router-dom'

// component imports
import Navbar from '@components/Navbar'

const BackAction: FC = () => {

  return (
    <>
      <Navbar type="back" />
      <Outlet />
    </>
  )
}

export default BackAction
