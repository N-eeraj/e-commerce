// react imports
import { FC, createContext } from 'react'

// react router imports
import { RouterProvider } from 'react-router-dom'
import router from '@router/index'

// react query imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// hook imports
import useAppContext from '@hooks/appContext'

const queryClient = new QueryClient()
export const AppContext = createContext({})

const App: FC = () => {
  const contextValues = useAppContext()

  return (
    <AppContext.Provider value={contextValues}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AppContext.Provider>
  )
}

export default App
