import { PROJECTS } from '../data/content.js';

function ProjectCard({ p }) {
  return (
    <a
      href="#work"
      className="project"
      style={{ '--w': p.w, order: PROJECTS.indexOf(p) }}
      data-reveal
      onClick={(e) => e.preventDefault()}
      aria-label={`${p.title} — case study coming soon`}
    >
      <div
        className={`project__media ${p.inset ? 'project__media--inset' : ''}`}
        style={{ aspectRatio: p.ratio, background: p.bg || '#262626' }}
      >
        <img src={p.img} alt="" loading="lazy" style={p.fit ? { objectFit: p.fit } : undefined} />
        <span className="project__cta" aria-hidden="true">View case ↗</span>
      </div>
      <div className="project__meta">
        <h3 className="project__title">{p.title}</h3>
        <p className="project__tags">{p.tags}</p>
      </div>
    </a>
  );
}

export default function Works() {
  const left = PROJECTS.filter((p) => p.col === 'left');
  const right = PROJECTS.filter((p) => p.col === 'right');
  return (
    <section id="work" className="works section-dark">
      <div className="container works__inner">
        <h2 className="h-section works__title" data-reveal>
          Selected Work.{' '}
          <span className="muted">
            Explore a selection of digital design work, product interfaces, and brand experiences shaped by
            different goals and user needs
          </span>
        </h2>
        <div className="works__grid">
          <div className="works__col works__col--left">
            {left.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
          <div className="works__col works__col--right">
            {right.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </div>
        {/* PLACEHOLDER: no case-study index page yet. */}
        <a href="#work" className="btn btn--secondary-dark" onClick={(e) => e.preventDefault()}>View all cases</a>
      </div>
    </section>
  );
}
