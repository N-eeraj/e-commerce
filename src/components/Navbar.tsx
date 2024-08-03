// react imports
import { FC, useContext } from 'react'

// react router imports
import { Link } from 'react-router-dom'

// shadcn/ui imports
import { Badge } from "@ui/badge"

// react icons imports
import { MdOutlineShoppingCart } from 'react-icons/md'

// asset imports 
import logo from '@assets/logo.svg'

// context imports
import { AppContext } from '@/App'
import { AppContextType } from '@hooks/appContext'

interface PropsInterface {
  showCart?: Boolean
}

const Navbar: FC<PropsInterface> = ({ showCart }) => {
  const { cartLength } = useContext(AppContext) as AppContextType

  return (
    <nav className={`fixed top-0 flex ${ showCart ? 'justify-between' : 'justify-center' } items-center w-full min-h-16 px-4 md:px-12 py-4 bg-primary text-primary-foreground`}>
      <Link to="/" className="flex items-center gap-x-2 text-2xl font-semibold">
        <img src={logo} alt="logo" className="size-8" />
        E-Commerce
      </Link>
      { showCart &&
        <Link to="/cart" className="flex items-center gap-x-1 text-lg">
          <div className="relative">
            <MdOutlineShoppingCart size="24" />
            { !!cartLength &&
              <Badge variant="secondary" className="absolute -top-2/3 scale-75">
                {cartLength}
              </Badge>
            }
          </div>
          <span>
            Cart
          </span>
        </Link>
      }
    </nav>
  )
}

export default Navbar
