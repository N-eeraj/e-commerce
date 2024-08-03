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
      <main className="pt-16 px-1 md:px-2">
        <Outlet />
      </main>
    </>
  )
}

export default BackAction
