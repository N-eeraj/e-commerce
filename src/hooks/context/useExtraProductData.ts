// react imports
import { useReducer } from 'react'

// hook imports
import { randomFloat, randomInteger } from '@hooks/utils'

// type imports
import ExtraProductDataHook, {
  ExtraProductDataStore,
  ExtraProductDataReducerAction,
  Offer,
  Feedback,
} from '@customTypes/appContext/extraProductData'

// constant imports
import { EXTRA_PRODUCT_INFO_TYPES } from '@/constants'

// reducer function for additional product data updates
const extraProductDataReducer = (extraProductData: ExtraProductDataStore, { type, id, value }: ExtraProductDataReducerAction): ExtraProductDataStore => {
  if (!extraProductData[id]) {
    extraProductData[id] = {}
  }
  switch (type) {
    case EXTRA_PRODUCT_INFO_TYPES.setDiscount:
      extraProductData[id].discount = (value as Offer).discount
      return extraProductData
    case EXTRA_PRODUCT_INFO_TYPES.setFeedback:
      extraProductData[id].feedback = value as Feedback
      return extraProductData
    default:
      console.warn(`Invalid action type: ${type}`)
      return extraProductData
  }
}

const useExtraProductData = (): ExtraProductDataHook => {
  const [extraProductData, extraProductDataDispatch] = useReducer(extraProductDataReducer, {})

  const findOrSetDiscount = (id: number) => {
    if (extraProductData[id]?.discount !== undefined) return
    // generate a random multiple of 5 between 0 & 60
    const discount = randomInteger({
      limit: 60,
      step: 5,
    })
    extraProductDataDispatch({
      type: 'setDiscount',
      id,
      value: { discount },
    })
  }

  const findOrSetFeedback = (id: number) => {
    if (extraProductData[id]?.feedback !== undefined) return
    const rating = randomFloat({
      limit: 5,
      decimalPlaces: 1,
    })
    const reviews = randomInteger({ limit: 1_000_000 })
    extraProductDataDispatch({
      type: 'setFeedback',
      id,
      value: { rating, reviews },
    })
  }

  return {
    extraProductData,
    findOrSetDiscount,
    findOrSetFeedback,
  }
}

export default useExtraProductData
