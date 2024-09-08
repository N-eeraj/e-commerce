// react imports
import { FC, useContext } from 'react'

// component imports
import CartListProduct from '@components/Cart/List/Product'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// type imports
import { AppContextType } from '@customTypes/appContext'

const CartList: FC = () => {
  const { cart } = useContext(AppContext) as AppContextType

  return (
    <ul>
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
