export const currencyFormat = (value: number) => Intl.NumberFormat(undefined, { style: 'currency', currency: 'INR' }).format(value)
