// react imports
import { FC } from 'react'

// shadcn/ui imports
import { Tabs } from '@ui/tabs'

// component imports
import PaymentTabList from '@components/Payment/Tab/List'
import PaymentTabContents from '@components/Payment/Tab/Contents'
import PaymentContextProvider from '@components/Payment/ContextProvider'

// types imports
import { PaymentTabs } from '@customTypes/payment'

const defaultTab: PaymentTabs = 'profile'

const Payment: FC = () => {
  return (
    <Tabs
      defaultValue={defaultTab}
      className="flex flex-col sm:flex-row gap-x-6 gap-y-2 m-4">
      <PaymentContextProvider>
          <PaymentTabList />
          <PaymentTabContents />
        </PaymentContextProvider>
    </Tabs>
  )
}

export default Payment
