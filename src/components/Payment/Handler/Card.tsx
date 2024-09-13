// react imports
import {
  FC,
  useState,
} from 'react'

// react hook form imports
import { useForm, SubmitHandler } from 'react-hook-form'

// shadcn/ui imports
import { Label } from '@ui/label'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { toast } from 'sonner'

// react icons imports
import { HiEye, HiEyeOff } from 'react-icons/hi'

// component imports
import OTPDialog from '@components/OTPDialog'

// hooks imports
import usePaymentHandler from '@hooks/payment/usePaymentHandler'

// types imports
import { CardForm } from '@customTypes/payment'

// constants imports
import { VALID_MAX_CARD_EXPIRY_YEAR } from '@/constants'

const Card: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CardForm>()

  const [showCVV, setShowCVV] = useState(false)
  const [showOTPModal, setShowOTPModal] = useState(false)

  const {
    totalAmount,
    placeOrder,
  } = usePaymentHandler()

  const triggerOTP: SubmitHandler<CardForm> = ({ cardNumber }) => {
    const formattedCardNumber = cardNumber
      .replace(/[\s\-]/g, '')
      .replace(/(.{4})/g, '$1 ')
    toast(`OTP sent to phone number registered to card number ${formattedCardNumber}`)
    setShowOTPModal(true)
  }

  return (
    <>
      <p className="text-sm mb-4">
        Enter your card details to make the payment of {totalAmount}.
      </p>

      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        onSubmit={handleSubmit(triggerOTP)}>
        <div>
          <Label htmlFor="cardNumber">
            Card Number
          </Label>
          <Input
            type="number"
            { ...register('cardNumber', {
                pattern: {
                  value: /^(?:\d{4}[-\s]?){3}\d{4}$/,
                  message: 'Please enter a valid card number',
                },
              })
            }
            placeholder="1234 5678 9012 3456"
            id="cardNumber"
            required
            className="focus-visible:ring-0 focus-visible:ring-offset-0" />
          { errors.cardNumber && (
            <span className="text-xs text-red-400">
              {errors.cardNumber.message}
            </span>
            )
          }
        </div>
        <div>
          <Label htmlFor="name">
            Name on Card
          </Label>
          <Input
            {...register('name')}
            placeholder="Enter the name on the card"
            id="name"
            required
            className="focus-visible:ring-0 focus-visible:ring-offset-0" />
          { errors.name && (
            <span className="text-xs text-red-400">
              {errors.name.message}
            </span>
            )
          }
        </div>
        <div>
          <Label>
            Expiry Date
          </Label>
          <div className="flex gap-x-2">
            <Input
              type="number"
              {...register('expiryDate.mm', {
                  pattern: {
                    value: /^(0[1-9]|1[0-2])$/,
                    message: 'Please enter a valid month',
                  },
                })
              }
              placeholder="MM"
              required
              className="focus-visible:ring-0 focus-visible:ring-offset-0" />
            <Input
              type="number"
              {...register('expiryDate.yy', {
                  validate: yy => {
                    const fullYear = 2000 + Number(yy)
                    const currentYear = new Date().getFullYear()
                    return fullYear >= currentYear && fullYear <= VALID_MAX_CARD_EXPIRY_YEAR  || 'Please enter a valid year'
                  }
                })
              }
              placeholder="YY"
              required
              className="focus-visible:ring-0 focus-visible:ring-offset-0" />
          </div>
          { errors.expiryDate?.mm && (
              <span className="block text-xs text-red-400">
                {errors.expiryDate?.mm.message}
              </span>
            )
          }
          { errors.expiryDate?.yy && (
              <span className="block text-xs text-red-400">
                {errors.expiryDate?.yy.message}
              </span>
            )
          }
        </div>
        <div>
          <Label htmlFor="cvv">
            CVV
          </Label>
          <div className="flex">
            <Input
              type={showCVV ? 'text' : 'password'}
              {...register('cvv', {
                minLength: {
                  value: 3,
                  message: 'CVV is a 3 digit number',
                },
                onChange: ({ target }) => target.value = target.value.replace(/\D/g, '')
              })}
              placeholder="Enter the CVV"
              id="cvv"
              required
              maxLength={3}
              className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0" />
            <Button
              type="button"
              className="aspect-square p-1 bg-gray-200 hover:bg-gray-300 focus-visible:bg-gray-300 text-black rounded-l-none focus-visible:ring-0 focus-visible:ring-offset-0"
              onClick={() => setShowCVV(!showCVV)}>
                { showCVV ? <HiEyeOff /> : <HiEye /> }
            </Button>
          </div>
          { errors.cvv && (
            <span className="text-xs text-red-400">
              {errors.cvv.message}
            </span>
            )
          }
        </div>
        <Button className="lg:col-span-2 lg:place-self-start">
          Proceed
        </Button>
      </form>

      <OTPDialog
        open={showOTPModal}
        onOpenChange={setShowOTPModal}
        onValidate={placeOrder} />
    </>
  )
}

export default Card
