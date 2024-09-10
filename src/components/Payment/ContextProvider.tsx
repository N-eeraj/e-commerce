// react imports
import { FC, createContext, useState } from 'react'

// types imports
import { Children } from '@customTypes/common'
import PaymentContextType, { Address, PhoneNumber } from '@customTypes/payment'

export const PaymentContext = createContext({})

const PaymentContextProvider: FC<Children> = ({ children }) => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>({
    dialCode: '',
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
