// react imports
import { FC } from 'react'

// shadcn/ui imports
import {
  Tabs,
  TabsContent,
} from '@ui/tabs'

// component imports
import PaymentTabs from '@components/Payment/Tabs'
import PaymentContextProvider from '@components/Payment/ContextProvider'

const Payment: FC = () => {
  return (
    <Tabs
      defaultValue="phone"
      className="flex flex-col sm:flex-row gap-x-6 gap-y-2 m-4">
      <PaymentContextProvider>
          <PaymentTabs />

          <TabsContent value="phone">
            handle phone
          </TabsContent>
          <TabsContent value="address">
            handle address
          </TabsContent>
          <TabsContent value="payment">
            handle payment
          </TabsContent>
        </PaymentContextProvider>
    </Tabs>
  )
}

export default Payment
