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
      <main className="pt-36 sm:pt-20 px-1 md:px-2">
        <Outlet />
      </main>
    </>
  )
}

export default Default
