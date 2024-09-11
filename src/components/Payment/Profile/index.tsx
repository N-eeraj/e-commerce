// react imports
import { FC } from 'react'

// component forms
import ProfileForm from '@components/Payment/Profile/Form'

const Profile: FC = () => {
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

      <ProfileForm />
    </section>
  )
}

export default Profile
