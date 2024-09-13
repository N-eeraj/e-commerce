// shadcn/ui imports
import { DialogProps } from '@radix-ui/react-dialog'

export default interface OTPDialogProps extends DialogProps {
  onValidate: MouseEventHandler
}
