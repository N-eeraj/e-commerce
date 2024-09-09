// react imports
import { FC, useContext } from 'react'

// component imports
import CartListProduct from '@components/Cart/List/Product'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// type imports
import { ClassNameProp } from '@customTypes/common'
import { AppContextType } from '@customTypes/appContext'

const CartList: FC<ClassNameProp> = ({ className }) => {
  const { cart } = useContext(AppContext) as AppContextType

  return (
    <ul className={`flex-1 flex flex-wrap gap-4 ${className}`}>
      { cart.map(product => (
          <li
            key={product.id}
            className="flex-1 min-w-80">
            <CartListProduct {...product} />
          </li>
        ))
      }
    </ul>
  )
}

export default CartList
