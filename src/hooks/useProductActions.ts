// react imports
import { useContext } from 'react'

// react router imports
import { useNavigate } from 'react-router-dom'

// shadcn/ui imports
import { toast } from 'sonner'

// context imports
import { AppContext } from '@components/App/ContextProvider'

// hooks imports
import { getOriginalPrice } from '@hooks/utils'

// type imports
import { AppContextType } from '@customTypes/appContext'

// constant imports
import { CART_REDUCER_TYPES } from '@/constants'

const useProductActions = (id: number | string, price: number, discount: number | undefined) => {
  const { cart, cartDispatch } = useContext(AppContext) as AppContextType
  const navigate = useNavigate()

  const isItemInCart = cart.some(item => item.id === Number(id))
  const originalPrice = getOriginalPrice(price, discount)

  const handleAddToCart = () => {
    cartDispatch({
      type: CART_REDUCER_TYPES.addItem,
      id: Number(id),
      price,
      originalPrice,
    })
    toast.success('Added item to cart')
  }

  const handleBuyNow = () => {
    if (!isItemInCart) {
      handleAddToCart()
    }
    navigate('/payment')
  }

  return {
    isItemInCart,
    originalPrice,
    handleAddToCart,
    handleBuyNow,
  }
}

export default useProductActions
