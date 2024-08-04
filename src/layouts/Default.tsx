// react imports
import { FC } from 'react'

// react router imports
import { Outlet } from 'react-router-dom'

// component imports
import NavBar from '@components/NavBar'

const Default: FC = () => {
  return (
    <>
      <NavBar type="default" />
      <main className="max-w-screen-2xl mx-auto pt-36 sm:pt-20 px-1 md:px-2">
        <Outlet />
      </main>
    </>
  )
}

export default Default
