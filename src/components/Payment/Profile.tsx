// react imports
import { FC, FormEvent } from 'react'

// shadcn/ui imports
import { Label } from '@ui/label'
import { Input } from '@ui/input'
import { Button } from '@ui/button'

// hook imports
import usePayment from '@hooks/usePayment'

const Profile: FC = () => {
  const {
    name,
    phoneNumber,
    addProfileDetails,
  } = usePayment()

  const triggerOTP = (event: FormEvent) => {
    event.preventDefault()
    console.log('open OTP modal')
  }

  return (
    <section className="flex flex-col gap-y-5">
      <div>
        <strong className="text-2xl">
          Profile Details
        </strong>
        <p className="text-slate-500 text-sm">
          Please enter your full name and phone number to proceed.
        </p>
      </div>

      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        onSubmit={triggerOTP}>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="name">
            Full Name
          </Label>
          <Input
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
              defaultValue={phoneNumber.dialCode}
              required
              pattern="^\+?[1-9][0-9]{0,3}$" 
              title="Please enter a valid phone dial code (e.g., +1, 44, 123)"
              className="w-16 border-r-[0.5px] rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0" />
            <Input
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
    </section>
  )
}

export default Profile
