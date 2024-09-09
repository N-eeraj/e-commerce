// react imports
import { MouseEventHandler } from 'react'

// type imports
import { ClassNameProp } from '@customTypes/common'

export default interface SafeImageProps extends ClassNameProp {
  src: string
  alt?: string
  onMouseOver?: MouseEventHandler
}
