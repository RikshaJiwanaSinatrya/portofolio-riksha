export default function SketchyFilter() {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        <filter id="sketchy">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="4" result="noise" seed="1" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  )
}
