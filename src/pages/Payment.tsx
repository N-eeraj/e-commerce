// react imports
import {
  FC,
  useContext,
  useEffect,
} from 'react'

// react router imports
import { useNavigate } from 'react-router-dom'

// shadcn/ui imports
import { Tabs } from '@ui/tabs'

// component imports
import PaymentTabsList from '@components/Payment/Tabs/List'
import PaymentTabsContents from '@components/Payment/Tabs/Contents'

// context imports
import { PaymentContext } from '@components/Payment/ContextProvider'
import { AppContext } from '@components/App/ContextProvider'

// types imports
import PaymentContextType from '@customTypes/payment'
import { AppContextType } from '@customTypes/appContext'

// constant imports
import { PAYMENT_TAB_VALUES } from '@/constants'


const Payment: FC = () => {
  const { cartLength } = useContext(AppContext) as AppContextType
  const { currentTab, setCurrentTab } = useContext(PaymentContext) as PaymentContextType
  const navigate = useNavigate()

  useEffect(() => {
    if (!cartLength) {
      navigate('/')
    }

    return () => setCurrentTab(PAYMENT_TAB_VALUES.profile)
  }, [])

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
