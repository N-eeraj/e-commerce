// react imports
import { useState, FocusEvent } from 'react'

// react hook form imports
import { SubmitHandler } from 'react-hook-form'

// shadcn/ui imports
import { toast } from 'sonner'

// hooks imports
import usePaymentHandler from '@hooks/payment/usePaymentHandler'

// types imports
import { CardForm } from '@customTypes/payment'

// constants imports
import { VALID_MAX_CARD_EXPIRY_YEAR } from '@/constants'

const useCardPayment = () => {
  const [showCVV, setShowCVV] = useState(false)
  const [showOTPModal, setShowOTPModal] = useState(false)

  const {
    totalAmount,
    placeOrder,
  } = usePaymentHandler()

  const twoDigitInput = ({ target }: FocusEvent<HTMLInputElement>) => target.value = target.value.padStart(2, '0')

  const yearValidation = (yy: string) => {
    const fullYear = 2000 + Number(yy)
    const currentYear = new Date().getFullYear()
    return fullYear >= currentYear && fullYear <= VALID_MAX_CARD_EXPIRY_YEAR  || 'Please enter a valid year'
  }

  const triggerOTP: SubmitHandler<CardForm> = ({ cardNumber }) => {
    const formattedCardNumber = cardNumber
      .replace(/[\s\-]/g, '')
      .replace(/(.{4})/g, '$1 ')
    toast(`OTP sent to phone number registered to card number ${formattedCardNumber}`)
    setShowOTPModal(true)
  }

  return {
    totalAmount,
    showCVV,
    showOTPModal,
    setShowCVV,
    setShowOTPModal,
    twoDigitInput,
    yearValidation,
    triggerOTP,
    placeOrder,
  }
}

export default useCardPayment
