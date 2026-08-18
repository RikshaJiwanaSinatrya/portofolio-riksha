export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-tight">Riksha</a>
          <div className="hidden sm:flex items-center gap-8 text-sm text-neutral-500">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#work" className="hover:text-black transition-colors">Work</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-14">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-sm text-neutral-400 mb-4 tracking-wide">Frontend Developer</p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Riksha
          </h1>
          <p className="text-lg sm:text-xl text-neutral-500 max-w-lg leading-relaxed">
            Building interfaces with care, precision, and an eye for detail.
          </p>
          <div className="mt-10 flex gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/15 text-sm font-medium rounded-full hover:border-black/40 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 mb-12">About</h2>
          <div className="grid sm:grid-cols-2 gap-16">
            <div>
              <p className="text-2xl sm:text-3xl font-light leading-snug text-neutral-800">
                I design and build web interfaces that are fast, accessible, and pleasant to use.
              </p>
            </div>
            <div className="space-y-4 text-neutral-500 leading-relaxed">
              <p>
                Focused on frontend development with deep attention to visual craft and interaction design.
                I believe good software should feel invisible — it just works.
              </p>
              <p>
                Currently interested in design systems, motion design, and the edge between aesthetics and engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 mb-12">Work</h2>
          <div className="space-y-1">
            {[
              { name: 'Project Alpha', desc: 'Design system & component library', tag: 'Design' },
              { name: 'Project Beta', desc: 'E-commerce platform redesign', tag: 'Web' },
              { name: 'Project Gamma', desc: 'Open source developer tooling', tag: 'OSS' },
            ].map((p) => (
              <a
                key={p.name}
                href="#"
                className="group flex items-center justify-between py-6 border-b border-black/5 hover:border-black/15 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-medium group-hover:translate-x-1 transition-transform">{p.name}</h3>
                  <p className="text-sm text-neutral-400 mt-0.5">{p.desc}</p>
                </div>
                <span className="text-xs font-mono text-neutral-300 group-hover:text-black transition-colors">{p.tag}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 mb-12">Contact</h2>
          <p className="text-2xl sm:text-3xl font-light text-neutral-800 mb-8 max-w-md">
            Have something in mind? Let&apos;s talk.
          </p>
          <a
            href="mailto:hello@riksha.dev"
            className="inline-flex items-center gap-2 text-lg font-medium border-b border-black pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
          >
            hello@riksha.dev
          </a>
          <div className="mt-12 flex gap-6 text-sm text-neutral-400">
            <a href="https://github.com/riksha" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/riksha" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-black/5">
        <p className="text-xs text-neutral-300 text-center">&copy; 2026 Riksha</p>
      </footer>
    </div>
  )
}
