export const randomInteger = ({ limit = 100, step = 1 } = {}) => Math.round(Math.random() * (limit / step)) * step

export const randomFloat = ({ limit = 100, decimalPlaces = 2 } = {}) => Number((Math.random() * limit).toFixed(decimalPlaces))
