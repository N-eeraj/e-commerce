// react imports
import { FC, useContext } from 'react'

// shadcn/ui imports
import { Tabs } from '@ui/tabs'

// component imports
import PaymentTabsList from '@components/Payment/Tabs/List'
import PaymentTabsContents from '@components/Payment/Tabs/Contents'

// context imports
import { PaymentContext } from '@components/Payment/ContextProvider'

// types imports
import PaymentContextType from '@customTypes/payment'

const Payment: FC = () => {
  const { currentTab } = useContext(PaymentContext) as PaymentContextType

  return (
    <Tabs
      value={currentTab}
      className="flex flex-col sm:flex-row gap-x-6 gap-y-2 m-4">
      <PaymentTabsList />
      <PaymentTabsContents />
    </Tabs>
  )
}

export default Payment
