// react imports
import { FC } from 'react'

// react hook form imports
import { useForm } from 'react-hook-form'

// shadcn/ui imports
import { Label } from '@ui/label'
import { Input } from '@ui/input'
import { Button } from '@ui/button'

// component imports
import OTPDialog from '@components/OTPDialog'

// hooks imports
import useProfile from '@hooks/payment/useProfile'

// types imports
import { ProfileForm as ProfileFormType } from '@customTypes/payment'


const ProfileForm: FC = () => {
  const { register, handleSubmit } = useForm<ProfileFormType>()

  const {
    name,
    phoneNumber,
    showOTPModal,
    triggerOTP,
    setShowOTPModal,
    handleOTPSubmit,
  } = useProfile()

  return (
    <>
      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        onSubmit={handleSubmit(triggerOTP)}>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="name">
            Full Name
          </Label>
          <Input
            {...register('name')}
            defaultValue={name}
            id="name"
            required
            className="focus-visible:ring-0 focus-visible:ring-offset-0" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>
            Phone Number
          </Label>
          <div className="flex">
            <Input
              {...register('phone.dialCode')}
              defaultValue={phoneNumber.dialCode}
              required
              pattern="^\+?[1-9][0-9]{0,3}$" 
              title="Please enter a valid phone dial code (e.g., +1, 44, 123)"
              className="w-16 border-r-[0.5px] rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0" />
            <Input
              {...register('phone.number')}
              defaultValue={phoneNumber.number}
              required
              pattern="^\+?[1-9]\d{1,14}$"
              title="Please enter a valid phone number (e.g., +1234567890)"
              className="flex-1 border-l-[0.5px] rounded-l-none focus-visible:ring-0 focus-visible:ring-offset-0" />
          </div>
        </div>
        <Button className="lg:col-span-2 lg:place-self-end lg:w-28">
          Continue
        </Button>
      </form>

      <OTPDialog
        open={showOTPModal}
        onOpenChange={setShowOTPModal}
        onValidate={handleOTPSubmit} />
    </>
  )
}

export default ProfileForm
