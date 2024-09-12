export const PRICES = [
  10,
  50,
  100,
  500,
  1000,
  5000,
  10000,
]

export const EXTRA_PRODUCT_INFO_TYPES = {
  setDiscount: 'setDiscount',
  setFeedback: 'setFeedback',
} as const

export const FREE_DELIVERY_MIN_AMOUNT = 50
export const SAVER_MIN_PERCENTAGE = 20

export const CART_REDUCER_TYPES = {
  addItem: 'addItem',
  removeItem: 'removeItem',
  updateItemCount: 'updateItemCount',
  clearCart: 'clearCart',
} as const

export const PAYMENT_TAB_VALUES = {
  profile: 'profile',
  address: 'address',
  payment: 'payment',
} as const

export const DEFAULT_DIAL_CODE = '+91'
export const OTP_LENGTH = 6

export const ADDRESS_TYPE = ['home', 'work'] as const

export const PAYMENT_OPTIONS = [
  {
    value: 'upi',
    text: 'UPI',
  },
  {
    value: 'cod',
    text: 'Cash on Delivery',
  },
  {
    value: 'card',
    text: 'Credit/Debit Card',
  },
] as const
