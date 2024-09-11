// react imports
import { FC, useState } from 'react'

// react hook form imports
import { useForm } from 'react-hook-form'

// shadcn/ui imports
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { Button } from '@ui/button'

// hooks imports
import useAddress from '@hooks/payment/useAddress'

// types imports
import { Address } from '@customTypes/payment'

// constant imports
import { ADDRESS_TYPE } from '@/constants'

const AddressForm: FC = () => {
  const { register, handleSubmit } = useForm<Address>()
  const {
    address,
    submitAddress,
  } = useAddress()
  const [currentType, setCurrentType] = useState(address?.type)

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      onSubmit={handleSubmit(submitAddress)}>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="building">
          Building / House Name
        </Label>
        <Input
          {...register('building')}
          defaultValue={address?.building}
          id="building"
          placeholder="Enter the name of your house or building"
          required
          className="focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="road">
          Street / Road Name
        </Label>
        <Input
          {...register('road')}
          defaultValue={address?.road}
          id="road"
          placeholder="Enter the name the road or street"
          required
          className="focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="landmark">
          Landmark
        </Label>
        <Input
          {...register('landmark')}
          defaultValue={address?.landmark}
          id="landmark"
          placeholder="Enter any landmark near the location"
          className="focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="postalCode">
          Postal Code
        </Label>
        <Input
          {...register('postalCode')}
          defaultValue={address?.postalCode}
          id="postalCode"
          placeholder="Enter your postal code"
          required
          className="focus-visible:ring-0 focus-visible:ring-offset-0" />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label>
          Address Type
        </Label>
        <div className="flex gap-x-2">
          { ADDRESS_TYPE.map(type => (
              <label
                key={type}
                className={`grid place-content-center w-20 p-1 border-2 rounded-full duration-300 ${type === currentType ? 'text-white bg-primary border-primary' : 'text-primary/75 bg-primary-foreground border-primary/25'}`}>
                  <span className="text-sm capitalize">
                    {type}
                  </span>
                  <input
                    type="radio"
                    defaultChecked={address?.type === type}
                    {...register('type')}
                    value={type}
                    className="hidden"
                    onChange={() => setCurrentType(type)} />
              </label>
            ))
          }
        </div>
      </div>
      <Button className="lg:col-span-2 lg:place-self-end">
        Proceed to Payment
      </Button>
    </form>
  )
}

export default AddressForm
