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
    <ul className={className}>
      { cart.map(product => (
          <li key={product.id}>
            <CartListProduct {...product} />
          </li>
        ))
      }
    </ul>
  )
}

export default CartList
