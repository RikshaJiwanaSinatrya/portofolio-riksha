import { useLanguage } from '../context/LanguageContext'
import contentId from '../data/content-id'
import contentEn from '../data/content-en'
import AnimatedSection from '../components/AnimatedSection'
import StrokeText from '../components/StrokeText'
import TiltCard from '../components/TiltCard'
import SpecularButton from '../components/SpecularButton'
import Footer from '../components/Footer'
import Lanyard from '../components/Lanyard'
import CircularText from '../components/CircularText'

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
            <div style={{ textAlign: 'left' }}>
            <p className="text-sm mb-4 tracking-wide" style={{ color: 'var(--text-muted)' }}>
              {content.hero.greeting}
            </p>
            <div className="mb-6">
              <StrokeText
                text="Riksha"
                strokeColor="var(--primary-start)"
                fillColor="var(--text)"
                strokeWidth={1.4}
                drawDuration={1.6}
                fillDelay={0.2}
                stagger={0.05}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={128}
                fontWeight={800}
                letterSpacing={-4}
              />
            </div>
            <p
              className="text-sm md:text-base max-w-lg leading-relaxed mb-10"
              style={{ color: 'var(--text-muted)' }}
            >
              {content.hero.subtitle}
            </p><br />
            <div className="flex flex-wrap gap-4" style={{ justifyContent: 'flex-start' }}>
              <a href="#projects">
                <SpecularButton
                  size="lg"
                  radius={18}
                  textColor="#f5f5f5"
                  lineColor="#ffffff"
                  baseColor="#525252"
                  intensity={1}
                  shineSize={10}
                  shineFade={40}
                  thickness={1}
                  speed={0.35}
                  followMouse
                  proximity={250}
                >
                  {content.hero.ctaPrimary}
                </SpecularButton>
              </a>
              <a href="#contact">
                <SpecularButton
                  size="lg"
                  radius={18}
                  tint="var(--surface)"
                  tintOpacity={0.5}
                  textColor="var(--text)"
                  lineColor="var(--primary-start)"
                  baseColor="var(--border)"
                  intensity={0.8}
                  shineSize={10}
                  shineFade={40}
                  thickness={1}
                  speed={0.35}
                  followMouse
                  proximity={250}
                >
                  {content.hero.ctaSecondary}
                </SpecularButton>
              </a>
            </div>
            </div>
          </AnimatedSection>
          <div className="hidden md:block h-[750px] relative">
            <div className="absolute top-0 right-0 z-10">
              <CircularText
                text="FRONTEND*DEVELOPER*"
                onHover="speedUp"
                spinDuration={20}
                className=""
              />
            </div>
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
          <a href={`mailto:${content.contact.email}`} className="inline-block">
            <SpecularButton
              size="md"
              radius={18}
              textColor="var(--text)"
              lineColor="var(--text)"
              baseColor="var(--border)"
              intensity={0.8}
              shineSize={10}
              shineFade={40}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={250}
            >
              {content.contact.email}
            </SpecularButton>
          </a>
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
