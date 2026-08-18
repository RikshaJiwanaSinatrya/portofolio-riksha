const doodles = {
  star: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  ),
  heart: (color) => (
    <svg viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1.5">
      <path d="M12 21C12 21 3 13.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.5 12 21 12 21Z" />
    </svg>
  ),
  arrowRight: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowDown: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  ),
  spiral: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M12 12c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 3.87-3.13 7-7 7s-7-3.13-7-7 3.13-7 7-7" />
    </svg>
  ),
  squiggle: (color) => (
    <svg viewBox="0 0 60 10" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M2 5c4-4 8 4 12 0s8 4 12 0 8 4 12 0 8 4 12 0 8 4 12 0" />
    </svg>
  ),
  circle: (color) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" strokeDasharray="3 2" />
    </svg>
  ),
}

export default function Doodle({ type = 'star', color = '#FF8A80', size = 24, rotation = 0, className = '' }) {
  const svg = doodles[type]
  if (!svg) return null

  return (
    <span
      className={`inline-block pointer-events-none ${className}`}
      style={{ width: size, height: size, transform: `rotate(${rotation}deg)` }}
    >
      {svg(color)}
    </span>
  )
}
