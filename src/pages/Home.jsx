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

function useOnScreen(threshold = 0.4) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return () => {}
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return () => {}
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [visible, ref]
}

function SkillBar({ skill, unit, delay = 0 }) {
  const [visible, ref] = useOnScreen(0.5)
  return (
    <div className="skill-row" ref={ref}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="skill-row__name" style={{ color: 'var(--text)' }}>
          {skill.name}
        </span>
        <span className="skill-row__level">
          {skill.level}
          {unit}
        </span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: visible ? `${skill.level}%` : 0,
            transitionDelay: visible ? `${delay}ms` : '0ms',
          }}
        />
      </div>
    </div>
  )
}

function CategoryCard({ category, index, unit }) {
  return (
    <div className="skill-category h-full">
      <div className="skill-category__meta">
        <span className="skill-category__index">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3
        className="skill-category__title"
        style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
      >
        {category.name}
      </h3>
      <div className="skill-category__divider" aria-hidden="true" />
      <div className="skill-category__items">
        {category.items.map((skill, skillIdx) => (
          <SkillBar key={skill.name} skill={skill} unit="%" delay={skillIdx * 110} />
        ))}
      </div>
      <span className="skill-category__accent" aria-hidden="true" />
    </div>
  )
}

function ProjectCard({ project, index, featured, cta }) {
  return (
    <TiltCard className="h-full">
      <article className="project-card h-full">
        <div className="project-card__bar">
          <span className="project-card__dot" style={{ background: 'var(--primary-start)' }} />
          <span className="project-card__dot" style={{ background: 'var(--primary-end)' }} />
          <span className="project-card__dot" style={{ background: 'var(--accent-start)' }} />
          <span className="project-card__bar-title">repo — {project.slug}</span>
        </div>
        {featured && (
          <div className="project-card__cover" aria-hidden="true">
            <span className="project-card__cover-num">/{String(index + 1).padStart(2, '0')}</span>
            <span className="project-card__cover-mono">featured_case</span>
          </div>
        )}
        <div className="project-card__body">
          <div className="project-card__head">
            <span className="project-card__index">/{String(index + 1).padStart(2, '0')}</span>
            {featured && <span className="project-card__featured">featured</span>}
          </div>
          <h3 className="project-card__title">{project.name}</h3>
          <p className="project-card__desc">{project.description}</p>
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="project-card__footer">
          <span className="project-card__cta">{cta}</span>
          <svg
            className="project-card__cta-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </article>
    </TiltCard>
  )
}

function MessageForm({ labels, recipient }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${labels.subject} ${name}`.trim())
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ''}`)
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__bar">
        <span className="contact-form__dot" style={{ background: 'var(--primary-start)' }} />
        <span className="contact-form__dot" style={{ background: 'var(--primary-end)' }} />
        <span className="contact-form__dot" style={{ background: 'var(--accent-start)' }} />
        <span className="contact-form__title">editor — draft</span>
      </div>
      <div className="contact-form__body">
        <div className="contact-form__grid">
          <label className="contact-field">
            <span className="contact-field__label">{labels.name}</span>
            <input
              className="contact-field__input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </label>
          <label className="contact-field">
            <span className="contact-field__label">{labels.email}</span>
            <input
              className="contact-field__input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </label>
        </div>
        <label className="contact-field">
          <span className="contact-field__label">{labels.message}</span>
          <textarea
            className="contact-field__input contact-field__textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={labels.placeholder}
            rows={5}
            required
          />
        </label>
        <button type="submit" className="contact-form__send">
          <span>{labels.send}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </button>
      </div>
    </form>
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
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <SectionLabel>{content.skills.label}</SectionLabel>
            <p className="skill-section-intro">{content.skills.intro}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {content.skills.categories.map((category, catIdx) => (
              <AnimatedSection key={category.name} delay={catIdx * 0.1} className="h-full">
                <CategoryCard
                  category={category}
                  index={catIdx}
                  unit={content.skills.unit}
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <SectionDivider />

      {/* Projects */}
      <section id="projects" className="content-section">
        <AnimatedSection className="content-shell">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <SectionLabel>{content.projects.label}</SectionLabel>
            <p className="skill-section-intro">{content.projects.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {content.projects.items.map((project, i) => (
              <div
                key={project.slug}
                className={i === 0 ? 'md:row-span-2' : ''}
              >
                <a href={`/blog/${project.slug}`} className="block h-full">
                  <ProjectCard
                    project={project}
                    index={i}
                    featured={i === 0}
                    cta={content.projects.cta}
                  />
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
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <SectionLabel>{content.contact.label}</SectionLabel>
            <p className="skill-section-intro">{content.contact.intro}</p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-bar">
              <span className="contact-bar__dot" style={{ background: 'var(--primary-start)' }} />
              <span className="contact-bar__dot" style={{ background: 'var(--primary-end)' }} />
              <span className="contact-bar__dot" style={{ background: 'var(--accent-start)' }} />
              <span className="contact-bar__title">contact — reach_out</span>
            </div>
            <div className="contact-body">
              <div className="contact-info">
                <div className="contact-meta">
                  <span className="contact-meta__item">
                    <span className="about-identity__dot" aria-hidden="true" />
                    {content.about.identity.status}
                  </span>
                  <span className="contact-meta__item">location — {content.about.identity.based}</span>
                </div>

                <p className="contact-prompt">$ {content.contact.prompt}</p>
                <h2
                  className="contact-headline"
                  style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
                >
                  {content.contact.headline}
                </h2>
                <p className="contact-desc">{content.contact.description}</p>

                <a href={`mailto:${content.contact.email}`} className="contact-email">
                  <span className="contact-email__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  </span>
                  <span className="contact-email__label">{content.contact.email}</span>
                  <svg
                    className="contact-email__arrow"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <div className="contact-links">
                  <a
                    href="https://github.com/riksha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="contact-link__label">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      {content.contact.github}
                    </span>
                    <svg className="contact-link__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/riksha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <span className="contact-link__label">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      {content.contact.linkedin}
                    </span>
                    <svg className="contact-link__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </a>
                </div>
              </div>

              <MessageForm labels={content.contact.form} recipient={content.contact.email} />
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  )
}
