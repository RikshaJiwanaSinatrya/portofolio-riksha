import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import contentId from '../data/content-id'
import contentEn from '../data/content-en'
import AnimatedSection from '../components/AnimatedSection'
import StrokeText from '../components/StrokeText'
import TiltCard from '../components/TiltCard'
import SpecularButton from '../components/SpecularButton'
import Footer from '../components/Footer'
import Lanyard from '../components/Lanyard'
import TextLoop from '../components/TextLoop'

function FocusAreaIcon({ type }) {
  const icons = {
    code: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    design: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    motion: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  }
  return icons[type] || null
}

function SectionDivider() {
  return <div className="section-divider" />
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

function highlightSentence(sentence, highlights = []) {
  const parts = []
  let rest = sentence
  for (const phrase of highlights) {
    const idx = rest.toLowerCase().indexOf(phrase.toLowerCase())
    if (idx < 0) continue
    if (idx > 0) parts.push(rest.slice(0, idx))
    parts.push({ highlight: true, text: rest.slice(idx, idx + phrase.length) })
    rest = rest.slice(idx + phrase.length)
  }
  if (rest) parts.push(rest)
  return parts
}

function Statement({ sentence, highlights, eyebrow }) {
  const parts = highlightSentence(sentence, highlights)
  return (
    <div className="about-statement-wrap">
      <div className="about-statement-eyebrow">
        <span className="about-statement-eyebrow__rule" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <p className="about-statement">
        {parts.map((part, i) =>
          part.highlight ? (
            <mark key={i} className="gradient-text about-statement__hl">
              {part.text}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    </div>
  )
}

function IdentityCard({ identity }) {
  const rows = [
    ['name', identity.name],
    ['role', identity.role],
    ['based', identity.based],
    ['status', identity.status, true],
  ]
  return (
    <TiltCard className="h-full">
      <div className="about-identity">
        <div className="about-identity__bar">
          <span className="about-identity__bar-dot" style={{ background: 'var(--primary-start)' }} />
          <span className="about-identity__bar-dot" style={{ background: 'var(--primary-end)' }} />
          <span className="about-identity__bar-dot" style={{ background: 'var(--accent-start)' }} />
          <span className="about-identity__bar-title">about — whoami</span>
        </div>
        <div className="about-identity__body">
          <div className="about-identity__head">
            <p className="about-identity__prompt">$ whoami</p>
            <span className="about-identity__uptime" aria-hidden="true">◆ active</span>
          </div>
          <div className="about-identity__rows">
            {rows.map(([key, value, isStatus]) => (
              <div className="about-identity__row" key={key}>
                <span className="about-identity__key">{key}</span>
                <span className="about-identity__float">=&gt;</span>
                <span className="about-identity__val">
                  {isStatus && <span className="about-identity__dot" aria-hidden="true" />}
                  {value}
                </span>
              </div>
            ))}
          </div>
          <p className="about-identity__cursor" aria-hidden="true">
            $ about — ready to build
          </p>
        </div>
      </div>
    </TiltCard>
  )
}

function useCountUp(target, { duration = 1200, delay = 0 } = {}) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setValue(target)
      return () => {}
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return () => {}
    }

    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now() + delay
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        setValue(Math.round((1 - Math.pow(1 - t, 3)) * target))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.3 })

    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration, delay])

  return [value, ref]
}

function StatItem({ stat }) {
  const [value, ref] = useCountUp(stat.value)
  return (
    <div className="about-stat" ref={ref}>
      <span className="about-stat__value">
        {value}
        {stat.suffix}
      </span>
      <span className="about-stat__label">{stat.label}</span>
    </div>
  )
}

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
                  text="Riksha Jiwana Sinatrya"
                  strokeColor="var(--primary-start)"
                  fillColor="var(--text)"
                  strokeWidth={1.4}
                  drawDuration={1.6}
                  fillDelay={0.2}
                  stagger={0.05}
                  ease="power2.out"
                  trigger="mount"
                  fillMode="wipe"
                  fontSize={118}
                  fontWeight={800}
                  letterSpacing={-4}
                />
              </div>
              <p
                className="text-sm md:text-base max-w-lg leading-relaxed mb-10"
                style={{ color: 'var(--text-muted)' }}
              >
                {content.hero.subtitle}
              </p>
              <br />
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
          <div className="lanyard-slot relative">
            <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} frontImage="/card-front.svg" backImage="/card-back.svg" />
          </div>
        </div>
      </section>

      {/* TextLoop - Scrolling Text */}
      <section style={{ padding: '0 var(--page-x)', overflow: 'hidden', marginTop: '-250px', position: 'relative', zIndex: 5 }}>
        <TextLoop
          text="software ✦ engineering"
          shape="wave"
          speed={90}
          direction="forward"
          separator="✦"
          curviness={90}
          fontSize={46}
          fontWeight={800}
          letterSpacing={2}
          uppercase
          color="var(--text)"
          ribbon
          ribbonColor="var(--primary-start)"
          ribbonWidth={86}
          pauseOnHover={false}
        />
      </section>

      {/* About */}
      <section id="about" className="content-section">
        <AnimatedSection className="content-shell">
          <SectionLabel>{content.about.label}</SectionLabel>

          <div className="about-statement-holder mt-10 mb-10 md:mb-14">
            <Statement
              sentence={content.about.statement}
              highlights={content.about.statementHighlights}
              eyebrow={content.about.statementEyebrow}
            />
          </div>

          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 items-start">
            <div className="about-bio">
              <p className="about-detail">{content.about.detail1}</p>
              <p className="about-detail">{content.about.detail2}</p>
            </div>
            <div className="lg:max-w-sm">
              <IdentityCard identity={content.about.identity} />
            </div>
          </div>

          <div className="about-stats mt-12 md:mt-16 mb-14">
            {content.about.stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {content.about.focusAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={0.1 + i * 0.1}>
                <div className="focus-card h-full">
                  <span className="focus-card-accent" aria-hidden="true" />
                  <div className="flex items-start justify-between mb-4">
                    <div className="focus-card-icon">
                      <FocusAreaIcon type={area.icon} />
                    </div>
                    <span className="focus-card-index">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
                  >
                    {area.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {area.description}
                  </p>
                  <span className="focus-card-line" aria-hidden="true" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <SectionDivider />

      {/* Skills */}
      <section className="content-section">
        <AnimatedSection className="content-shell">
          <SectionLabel>{content.skills.label}</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-5 mt-10">
            {content.skills.categories.map((category, catIdx) => (
              <AnimatedSection key={category.name} delay={catIdx * 0.1}>
                <div className="skill-category h-full">
                  <h3
                    className="text-sm font-semibold mb-5"
                    style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
                  >
                    {category.name}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium" style={{ color: 'var(--text)' }}>
                            {skill.name}
                          </span>
                          <span
                            className="text-[10px] tabular-nums"
                            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar-track">
                          <div
                            className="skill-bar-fill"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <SectionDivider />

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
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                          style={{
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--primary-start)',
                            background: 'color-mix(in srgb, var(--primary-start) 10%, transparent)',
                            border: '1px solid color-mix(in srgb, var(--primary-start) 20%, transparent)',
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
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

      <SectionDivider />

      {/* Contact */}
      <section id="contact" className="content-section">
        <AnimatedSection className="content-shell">
          <div className="contact-wrapper">
            <SectionLabel>{content.contact.label}</SectionLabel>
            <p
              className="text-2xl md:text-3xl font-light mb-4 max-w-md mt-8"
              style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
            >
              {content.contact.headline}
            </p>
            <p
              className="text-sm leading-relaxed mb-8 max-w-md"
              style={{ color: 'var(--text-muted)' }}
            >
              {content.contact.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={`mailto:${content.contact.email}`}>
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
              <div className="flex gap-5 text-sm" style={{ color: 'var(--text-muted)' }}>
                <a
                  href="https://github.com/riksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 inline-flex items-center gap-1.5"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  {content.contact.github}
                </a>
                <a
                  href="https://linkedin.com/in/riksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 inline-flex items-center gap-1.5"
                  style={{ color: 'inherit' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  {content.contact.linkedin}
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  )
}
