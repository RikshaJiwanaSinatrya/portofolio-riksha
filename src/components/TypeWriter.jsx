import { useEffect, useState } from 'react'

export default function TypeWriter({ text, speed = 50, className = '', onComplete }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('')
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        onComplete?.()
      }
    }, speed)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed])

  return (
    <span className={className}>
      {displayed}
      {displayed.length < text.length && <span className="blink">_</span>}
    </span>
  )
}
