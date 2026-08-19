import { useLanguage } from '../context/LanguageContext'
import contentId from '../data/content-id'
import contentEn from '../data/content-en'
import AnimatedSection from '../components/AnimatedSection'
import GradientText from '../components/GradientText'
import TiltCard from '../components/TiltCard'
import MagneticButton from '../components/MagneticButton'
import Footer from '../components/Footer'
import Lanyard from '../components/Lanyard'

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Framer Motion', icon: '✨' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Git', icon: '🔀' },
  { name: 'Figma', icon: '🖌️' },
]

export default function Home() {
  const { language } = useLanguage()
  const content = language === 'id' ? contentId : contentEn

  return (
    <div>
      {/* Hero */}
      <section id="home" className="hero-section" style={{ paddingTop: 0 }}>
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          <AnimatedSection>
            <p className="text-sm mb-4 tracking-wide" style={{ color: 'var(--text-muted)' }}>
              {content.hero.greeting}
            </p>
            <h1
              className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <GradientText as="span">RIKSHA</GradientText>
            </h1>
            <p
              className="text-lg md:text-xl max-w-lg leading-relaxed mb-10"
              style={{ color: 'var(--text-muted)' }}
            >
              {content.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton
                as="a"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, var(--primary-start), var(--primary-end))' }}
              >
                {content.hero.ctaPrimary}
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium glass transition-opacity hover:opacity-80"
                style={{ color: 'var(--text)' }}
              >
                {content.hero.ctaSecondary}
              </MagneticButton>
            </div>
          </AnimatedSection>
          <div className="hidden md:block h-[750px]">
            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} frontImage="/card-front.svg" backImage="/card-back.svg" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="content-section">
        <AnimatedSection className="content-shell">
          <SectionLabel>{content.about.label}</SectionLabel>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-10">
            <div>
              <p
                className="text-2xl md:text-3xl font-light leading-snug"
                style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
              >
                {content.about.statement}
              </p>
            </div>
            <div className="space-y-4" style={{ color: 'var(--text-muted)' }}>
              <p className="leading-relaxed">{content.about.detail1}</p>
              <p className="leading-relaxed">{content.about.detail2}</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Skills */}
      <section className="content-section">
        <AnimatedSection className="content-shell">
          <SectionLabel>{content.skills.label}</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-10">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass rounded-xl px-4 py-3 flex items-center gap-3 transition-colors duration-200 hover:border-[rgba(102,126,234,0.3)]"
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Projects */}
      <section id="projects" className="content-section">
        <AnimatedSection className="content-shell">
          <SectionLabel>{content.projects.label}</SectionLabel>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-10">
            {content.projects.items.map((project, i) => (
              <div
                key={project.slug}
                className={i === 0 ? 'md:row-span-2' : ''}
              >
                <a href={`/blog/${project.slug}`} className="block h-full">
                  <TiltCard className="h-full">
                    <div className="p-6 md:p-8 flex flex-col h-full min-h-[200px]">
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
                      >
                        {project.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-4 flex-1"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                            style={{
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--primary-start)',
                              background: 'var(--surface)',
                              border: '1px solid var(--border)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </a>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Contact */}
      <section id="contact" className="content-section">
        <AnimatedSection className="content-shell">
          <SectionLabel>{content.contact.label}</SectionLabel>
          <p
            className="text-2xl md:text-3xl font-light mb-8 max-w-md mt-8"
            style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
          >
            {content.contact.headline}
          </p>
          <MagneticButton
            as="a"
            href={`mailto:${content.contact.email}`}
            className="inline-flex items-center gap-2 text-lg font-medium border-b pb-1 transition-colors duration-200"
            style={{ color: 'var(--text)', borderColor: 'var(--text)' }}
          >
            {content.contact.email}
          </MagneticButton>
          <div className="mt-10 flex gap-6 text-sm" style={{ color: 'var(--text-muted)' }}>
            <a
              href="https://github.com/riksha"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {content.contact.github}
            </a>
            <a
              href="https://linkedin.com/in/riksha"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {content.contact.linkedin}
            </a>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <h2
      className="text-xs font-medium uppercase tracking-[0.2em]"
      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
    >
      {children}
    </h2>
  )
}
