// react imports
import { FC } from 'react'

// react router imports
import { RouterProvider } from 'react-router-dom'
import router from '@router/index'

// shadcn/ui imports
import { Toaster } from '@ui/sonner'

// component imports
import AppContextProvider from '@components/App/ContextProvider'
import PaymentContextProvider from '@components/Payment/ContextProvider'
import QueryProvider from '@components/App/QueryProvider'

const App: FC = () => {

  return (
    <AppContextProvider>
      <PaymentContextProvider>
        <QueryProvider>
          <RouterProvider router={router} />
          <Toaster />
        </QueryProvider>
      </PaymentContextProvider>
    </AppContextProvider>
  )
}

export default App
