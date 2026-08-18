export default function PixelAvatar({ size = 'md' }) {
  const sizes = {
    sm: 'text-[6px] leading-[8px]',
    md: 'text-[8px] leading-[10px]',
    lg: 'text-[10px] leading-[13px]',
  }

  const art = `
    ██████████
   ██░░░░░░░░██
  ██░░██████░░░██
  ██░░██████░░░██
  ██░░░░░░░░░░░██
   ██░░░░░░░░░██
    ██████████
   ██░░░░░░░░░██
  ██░░████████░░██
  ██░░████████░░██
  ██░░░░░░░░░░░░██
   ██░░░░░░░░░░██
    ██░░░░░░░░██
     ██████████
  `.trim()

  return (
    <div className={`font-pixel ${sizes[size]} text-cyan whitespace-pre leading-none select-none`}>
      {art.split('\n').map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  )
}
