// react imports
import { KeyboardEvent, MutableRefObject, useEffect, useRef } from 'react'

// react router imports
import { useNavigate } from 'react-router-dom'

// hook import
import useProductFilters from '@hooks/filter/useProductFilters'

const useSearchBar = () => {
  const navigate = useNavigate()
  const {
    title: searchQuery,
    updateProductFilters,
  } = useProductFilters()

  const inputEl: MutableRefObject<HTMLInputElement | null> = useRef(null)

  const handleKeyPress = ({ key, target }: KeyboardEvent<HTMLInputElement>) => {
    if (key !== 'Enter') return
    const inputEl = target as HTMLInputElement
    const title = inputEl.value
    if (!title) return
    navigate(`/products`)
    updateProductFilters('title', title)
    inputEl.blur()
  }

  useEffect(() => {
    if (!(inputEl.current && searchQuery)) return
    inputEl.current.value = searchQuery
    navigate(`/products`)
    updateProductFilters('title', searchQuery)
  }, [])

  return {
    inputEl,
    handleKeyPress,
  }
}

export default useSearchBar
