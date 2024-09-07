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
} as const
