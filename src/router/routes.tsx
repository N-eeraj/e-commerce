// page imports
import Home from '@pages/Home'
import ProductList from '@pages/Product/List'
import ProductItem from '@/pages/Product/Item'
import Cart from '@/pages/Cart'
import Payment from '@/pages/Payment'

const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <ProductList />
      },
      {
        path: 'product/:id',
        element: <ProductItem />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'payment',
        element: <Payment />
      },
    ],
  }
]

export default routes
