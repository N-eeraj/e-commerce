// react imports
import { FC, MouseEventHandler } from 'react'

// shadcn/ui imports
import { DialogProps } from '@radix-ui/react-dialog'

// react icons imports
import { IconType } from 'react-icons/lib'

import {
  PAYMENT_TAB_VALUES,
  ADDRESS_TYPE,
} from '@/constants'

export type PaymentTabs = typeof PAYMENT_TAB_VALUES[number]

export interface PaymentSteps {
  text: string
  value: PaymentTabs
  icon: IconType
  disabled?: boolean
}

export interface PaymentTabContent {
  component: FC
  value: PaymentTabs
}

export interface Address {
  building: string
  road: string
  landmark: string
  type: typeof ADDRESS_TYPE[number]
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
  currentTab: PaymentTabs
  setName: (value: string) => void
  setPhoneNumber: (phoneNumber: PhoneNumber) => void
  setAddress: (address: Address) => void
  setCurrentTab: (tab: PaymentTabs) => void
}
