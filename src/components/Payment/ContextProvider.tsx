// react imports
import { FC, createContext, useState } from 'react'

// types imports
import { Children } from '@customTypes/common'
import PaymentContextType, { Address, PhoneNumber } from '@customTypes/payment'

// constant imports
import { DEFAULT_DIAL_CODE } from '@/constants'

export const PaymentContext = createContext({})

const PaymentContextProvider: FC<Children> = ({ children }) => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>({
    dialCode: DEFAULT_DIAL_CODE,
    number: '',
  })
  const [isPhoneValid, setValidatedPhoneNumber] = useState(false)
  const [address, setAddress] = useState<Address | null>(null)

  const allValues: PaymentContextType = {
    name,
    phoneNumber,
    isPhoneValid,
    address,
    setName,
    setPhoneNumber,
    setValidatedPhoneNumber,
    setAddress,
  }

  return (
    <PaymentContext.Provider value={allValues}>
      {children}
    </PaymentContext.Provider>
  )
}

export default PaymentContextProvider
