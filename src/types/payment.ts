// react imports
import { FC, MouseEventHandler } from 'react'

// shadcn/ui imports
import { DialogProps } from '@radix-ui/react-dialog'

export type PaymentTabs = 'profile' | 'address' | 'payment'

export interface PaymentTabContent {
  component: FC
  value: PaymentTabs
}

export interface Address {
  building: string
  road: string
  landmark: string
  type: 'home' | 'work'
}

export interface PhoneNumber {
  dialCode: string
  number: string
}


export interface ProfileForm {
  name: string
  phone: PhoneNumber
}

export interface OTPDialogProps extends DialogProps {
  onValidate: MouseEventHandler
}

export default interface PaymentContext {
  name: string
  phoneNumber: PhoneNumber
  address: Address | null
  setName: (value: string) => void
  setPhoneNumber: (phoneNumber: PhoneNumber) => void
  setAddress: (address: Address) => void
}
