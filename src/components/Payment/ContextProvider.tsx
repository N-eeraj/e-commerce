// react imports
import {
  FC,
  useState,
  createContext,
} from 'react'

// types imports
import { Children } from '@customTypes/common'
import PaymentContextType, {
  Address,
  PaymentTabs,
  PhoneNumber,
} from '@customTypes/payment'

// constant imports
import { DEFAULT_DIAL_CODE } from '@/constants'

export const PaymentContext = createContext({})

const PaymentContextProvider: FC<Children> = ({ children }) => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>({
    dialCode: DEFAULT_DIAL_CODE,
    number: '',
  })
  const [address, setAddress] = useState<Address | null>(null)
  const [currentTab, setCurrentTab] = useState<PaymentTabs>('profile')

  const allValues: PaymentContextType = {
    name,
    phoneNumber,
    address,
    currentTab,
    setName,
    setPhoneNumber,
    setAddress,
    setCurrentTab,
  }

  return (
    <PaymentContext.Provider value={allValues}>
      {children}
    </PaymentContext.Provider>
  )
}

export default PaymentContextProvider
