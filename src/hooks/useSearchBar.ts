// react imports
import { KeyboardEvent, MutableRefObject, useEffect, useRef } from 'react'

// react router imports
import { useNavigate, useSearchParams } from 'react-router-dom'

const useSearchBar = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') ?? ''

  const inputEl: MutableRefObject<HTMLInputElement | null> = useRef(null)

  const handleKeyPress = ({ key, target }: KeyboardEvent<HTMLInputElement>) => {
    if (key !== 'Enter') return
    const inputEl = target as HTMLInputElement
    const query = inputEl.value
    if (!query) return
    navigate(`/products?q=${query}`)
    inputEl.blur()
  }

  useEffect(() => {
    if (!(inputEl.current && searchQuery)) return
    inputEl.current.value = searchQuery
    navigate(`/products?q=${searchQuery}`)
  }, [])

  return {
    inputEl,
    handleKeyPress,
  }
}

export default useSearchBar
