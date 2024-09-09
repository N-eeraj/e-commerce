import { MouseEventHandler } from 'react'

export interface Children {
  children: any
}

export interface ClassNameProp {
  className?: string
}

export interface ReducerAction {
  type: string
}

export interface SafeImageProps extends ClassNameProp {
  src: string
  alt?: string
  onMouseOver?: MouseEventHandler
}
