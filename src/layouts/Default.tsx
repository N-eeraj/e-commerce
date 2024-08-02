// react router imports
import { Outlet } from 'react-router-dom'

// component imports
import Navbar from '@/components/Navbar'

const Default = () => {
  return (
    <>
      <Navbar showCart />
      <Outlet />
    </>
  )
}

export default Default
