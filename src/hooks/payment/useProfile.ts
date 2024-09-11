// react imports
import { useContext, useState } from 'react'

// react hook form imports
import { SubmitHandler } from 'react-hook-form'

// context imports
import { PaymentContext } from '@components/Payment/ContextProvider'

// type imports
import PaymentContextType, { ProfileForm } from '@customTypes/payment'

const useProfile = () => {
  const {
    name,
    phoneNumber,
    setName,
    setPhoneNumber,
    setCurrentTab,
  } = useContext(PaymentContext) as PaymentContextType

  const [formData, setFormData] = useState<ProfileForm | null>(null)
  const [showOTPModal, setShowOTPModal] = useState(false)

  const triggerOTP: SubmitHandler<ProfileForm> = (formData) => {
    setFormData(formData)
    setShowOTPModal(true)
  }

  const handleOTPSubmit = () => {
    const { name, phone } = formData as ProfileForm
    setName(name)
    setPhoneNumber(phone)
    setShowOTPModal(false)
    setCurrentTab('address')
  }

  return {
    name,
    phoneNumber,
    showOTPModal,
    triggerOTP,
    setShowOTPModal,
    handleOTPSubmit,
  }
}

export default useProfile
