// react imports
import {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react'

// shadcn/ui imports
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@ui/dialog'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@ui/input-otp'
import { Button } from '@ui/button'
import { REGEXP_ONLY_DIGITS } from 'input-otp'

// type imports
import { OTPDialogProps } from '@customTypes/payment'

// constant imports
import { OTP_LENGTH } from '@/constants'

const OTP: FC<OTPDialogProps> = ({ open, onOpenChange, onValidate }) => {
  const [otpValue, setOtpValue] = useState('')
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOtpValue('')
  }, [open])

  useEffect(() => {
    if (otpValue.length === OTP_LENGTH) {
      (buttonRef.current as HTMLButtonElement).focus()
    }
  }, [otpValue])

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>
            OTP Verification
          </DialogTitle>
          <DialogDescription>
            Please enter the OTP received on your phone
          </DialogDescription>
        </DialogHeader>

        <InputOTP
          value={otpValue}
          maxLength={OTP_LENGTH}
          pattern={REGEXP_ONLY_DIGITS}
          onChange={setOtpValue}>
          <InputOTPGroup className="flex justify-center w-full">
            { Array.from({ length: OTP_LENGTH })
                .map((_, index) => (
                  <InputOTPSlot
                    index={index}
                    key={index}
                    className="ring-primary" />
                ))
            }
          </InputOTPGroup>
        </InputOTP>
        <Button
          ref={buttonRef}
          disabled={otpValue.length !== OTP_LENGTH}
          className="disabled:grayscale disabled:cursor-not-allowed"
          onClick={onValidate}>
          Validate
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default OTP
