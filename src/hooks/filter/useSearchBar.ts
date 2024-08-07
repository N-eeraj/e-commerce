// react imports
import { KeyboardEvent, MutableRefObject, useEffect, useRef } from 'react'

// react router imports
import { useNavigate, useSearchParams } from 'react-router-dom'

const useSearchBar = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('title') ?? ''

  const inputEl: MutableRefObject<HTMLInputElement | null> = useRef(null)

  const handleKeyPress = ({ key, target }: KeyboardEvent<HTMLInputElement>) => {
    if (key !== 'Enter') return
    const inputEl = target as HTMLInputElement
    const title = inputEl.value
    if (!title) return
    navigate(`/products`)
    setSearchParams(prev => {
      prev.set('title', title)
      return prev
    })
    inputEl.blur()
  }

  useEffect(() => {
    if (!(inputEl.current && searchQuery)) return
    inputEl.current.value = searchQuery
    navigate(`/products`)
    setSearchParams(prev => {
      prev.set('title', searchQuery)
      return prev
    })
  }, [])

  return {
    inputEl,
    handleKeyPress,
  }
}

export default useSearchBar
