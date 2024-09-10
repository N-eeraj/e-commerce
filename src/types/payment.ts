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

export default interface PaymentContext {
  name: string
  phoneNumber: PhoneNumber
  isPhoneValid: boolean
  address: Address | null
  setName: (value: string) => void
  setPhoneNumber: (phoneNumber: PhoneNumber) => void
  setValidatedPhoneNumber: (value: boolean) => void
  setAddress: (address: Address) => void
}
