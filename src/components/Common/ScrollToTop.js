import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default () => {
  const location = useLocation()
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}
