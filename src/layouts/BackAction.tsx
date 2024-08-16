// react imports
import { FC } from 'react'

// react router imports
import { Outlet } from 'react-router-dom'

// component imports
import NavBar from '@components/NavBar'

const BackAction: FC = () => {

  return (
    <>
      <NavBar type="back" />
      <main className="max-w-screen-2xl mx-auto pt-16 px-1 md:px-2">
        <Outlet />
      </main>
    </>
  )
}

export default BackAction
