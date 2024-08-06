export default interface ProductFilter {
  title?: string
  categoryId?: number
  price_min?: number
  price_max?: number
  offset?: number
  limit?: number
}
