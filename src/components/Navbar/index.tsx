// react imports
import { FC } from 'react'

// component imports
import Brand from '@components/Navbar/Brand'
import Search from '@components/Navbar/Search'
import Cart from '@components/Navbar/Cart'
import BackButton from '@components/BackButton'

// type imports
import PropsType from '@customTypes/navBarProps'

const Navbar: FC<PropsType> = ({ type }) => {
  let justify: string
  let padding: string
  switch (type) {
    case 'back':
      justify = 'justify-start'
      padding = 'px-4'
      break
    case 'logo':
      padding = 'p-4 md:px-8'
      justify = 'justify-center'
      break
    default:
      padding = 'p-4 md:px-8 max-sm:py-6'
      justify = 'justify-between'
  }

  const showLogo = type !== 'back'
  const showSearchAndCart = type === 'default'

  return (
    <nav className={`fixed top-0 flex ${justify} items-center flex-wrap gap-x-8 gap-y-4 w-full min-h-16 ${ padding } bg-primary text-primary-foreground`}>
      { showLogo ? <Brand /> : <BackButton /> }
      { showSearchAndCart &&
        <>
          <Search className="w-full sm:max-w-xs max-sm:order-1 mr-auto" />
          <Cart />
        </>
      }
    </nav>
  )
}

export default Navbar
