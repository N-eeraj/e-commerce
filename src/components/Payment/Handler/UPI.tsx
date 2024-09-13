// react imports
import {
  FC,
  useRef,
  useEffect,
  useState,
} from 'react'

// react hook form imports
import { useForm, SubmitHandler } from 'react-hook-form'

// shadcn/ui imports
import { Label } from '@ui/label'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { toast } from 'sonner'

// hooks imports
import usePaymentHandler from '@hooks/payment/usePaymentHandler'

// types imports
import { UPIForm } from '@customTypes/payment'

const UPI: FC = () => {
  const {
    totalAmount,
    placeOrder,
  } = usePaymentHandler()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UPIForm>()

  const timeOut = useRef<NodeJS.Timeout>()
  const [isRequesting, setIsRequesting] = useState(false)

  const requestPayment: SubmitHandler<UPIForm> = ({ upiId }) => {
    setIsRequesting(true)
    toast(`Requesting payment for an amount of ${totalAmount} to ${upiId}`)
    timeOut.current = setTimeout(() => {
      setIsRequesting(false)
      toast.success('Payment received')
      placeOrder()
    }, 3000)
  }

  useEffect(() => {
    return () => {
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
    }
  }, [])

  return (
    <div className="space-y-4">
      <p className="text-sm">
        Ensure you have a minimum balance of {totalAmount} in your bank account.
      </p>
      <form
        className="flex flex-col items-start gap-y-6"
        onSubmit={handleSubmit(requestPayment)}>
        <div className="w-full">
          <Label htmlFor="upiId">
            Enter your UPI ID
          </Label>
          <Input
            { ...register('upiId', {
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+)$/,
                  message: 'Please enter a valid UPI ID (e.g., example@upi.provider)'
                }
              })
            }
            placeholder="Your UPI ID (eg: example@upi.provider)"
            id="upiId"
            required
            className="w-full focus-visible:ring-0 focus-visible:ring-offset-0" />
          { errors.upiId && (
            <span className="text-xs text-red-400">
              {errors.upiId.message}
            </span>
            )
          }
        </div>
        <Button disabled={isRequesting}>
          {isRequesting ? 'Waiting Payment' : 'Send Request'}
        </Button>
      </form>
    </div>
  )
}

export default UPI
