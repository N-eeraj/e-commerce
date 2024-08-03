// page imports
import DefaultLayout from '@layouts/Default'
import BackActionLayout from '@layouts/BackAction'

// page imports
import Home from '@pages/Home'
import ProductList from '@pages/Product/List'
import ProductItem from '@pages/Product/Item'
import Cart from '@pages/Cart'
import Payment from '@pages/Payment'
import PageNotFound from '@pages/PageNotFound'

const routes = [
  {
    path: '/',
    children: [
      {
        element: <DefaultLayout />,
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
        ],
      },
      {
        element: <BackActionLayout />,
        children: [
          {
            path: 'cart',
            element: <Cart />
          },
          {
            path: 'payment',
            element: <Payment />
          },
        ],
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  }
]

export default routes
