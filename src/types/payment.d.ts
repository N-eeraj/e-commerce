// react imports
import { FC, MouseEventHandler } from 'react'

// react icons imports
import { IconType } from 'react-icons/lib'

import {
  PAYMENT_TAB_VALUES,
  ADDRESS_TYPE,
  PAYMENT_OPTIONS,
} from '@/constants'

export type PaymentTabs = typeof PAYMENT_TAB_VALUES[keyof typeof PAYMENT_TAB_VALUES]

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
  postalCode: string
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

export type PaymentOption = typeof PAYMENT_OPTIONS[number]['value']

export interface PaymentOptionProps {
  value: PaymentOption
  options: typeof PAYMENT_OPTIONS
  onValueChange: (value: PaymentOption) => void
}

export interface UPIForm {
  upiId: string
}

export interface CardForm {
  cardNumber: string
  name: string
  expiryDate: {
    mm: string
    yy: string
  }
  cvv: string
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
