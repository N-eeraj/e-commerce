// react imports
import { FC } from 'react'

// component imports
import AddressForm from '@components/Payment/Address/Form'

const Address: FC = () => {
  return (
    <section className="flex flex-col gap-y-5">
      <div>
        <strong className="text-2xl">
          Delivery Address
        </strong>
        <p className="text-slate-500 text-sm">
          Please enter the address where you would like your products to be delivered.
        </p>
      </div>

      <AddressForm />
    </section>
  )
}

export default Address
