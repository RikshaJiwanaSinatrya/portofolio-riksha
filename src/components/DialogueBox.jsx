export default function DialogueBox({ children, className = '' }) {
  return (
    <div className={`relative pixel-border bg-bg-surface/90 backdrop-blur-sm p-6 md:p-8 ${className}`}>
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-pink-hot" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-pink-hot" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-pink-hot" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-pink-hot" />
      {children}
    </div>
  )
}
