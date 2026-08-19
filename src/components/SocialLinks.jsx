import { GitHubIcon, LinkedInIcon, EmailSocialIcon } from './Icons'

export default function SocialLinks({ className = '', size = 18 }) {
  const iconProps = { width: size, height: size }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://github.com/riksha"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200"
        style={{ color: 'var(--text-muted)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        <GitHubIcon {...iconProps} />
      </a>
      <a
        href="https://linkedin.com/in/riksha"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200"
        style={{ color: 'var(--text-muted)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        <LinkedInIcon {...iconProps} />
      </a>
      <a
        href="mailto:hello@riksha.dev"
        className="transition-colors duration-200"
        style={{ color: 'var(--text-muted)' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
      >
        <EmailSocialIcon {...iconProps} />
      </a>
    </div>
  )
}
