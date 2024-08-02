// react imports
import React from 'react'
import ReactDOM from 'react-dom/client'

// react router imports
import { RouterProvider } from 'react-router-dom'
import router from '@router/index'

// react query imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// style imports
import '@/index.css'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
