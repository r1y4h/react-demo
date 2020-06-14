import { useCallback, useRef } from 'react'

export const useDebounce = (func, delay = 350) => {
  const timeout = useRef(delay)
  const funcRef = useRef(func)
  funcRef.current = func

  return useCallback(
    (...args) => {
      const context = this

      timeout.current && clearTimeout(timeout.current)

      timeout.current = setTimeout(() => {
        timeout.current = null
        funcRef.current.apply(context, args)
      }, delay)
    },
    [funcRef, delay]
  )
}
