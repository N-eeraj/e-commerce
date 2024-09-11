export default interface Category {
  id: number
  name: string
  image: string
}

export interface CategoryListProp {
  categories: Category[]
}
