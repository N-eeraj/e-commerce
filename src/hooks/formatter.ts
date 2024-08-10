export const numberFormat = (value: number, options: Intl.NumberFormatOptions = {}) => Intl.NumberFormat(undefined, options).format(value)

export const currencyFormat = (value: number) => numberFormat(value, { style: 'currency', currency: 'INR' })
