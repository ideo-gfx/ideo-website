import { useEffect, useRef, useState } from 'react';
import { ASSETS, SERVICE_CATEGORIES } from '../data/content.js';
import { usePrefersReducedMotion } from '../hooks/useMotion.js';

const AUTOPLAY_MS = 6000;

export default function Services() {
  const [cat, setCat] = useState(0);
  const [svc, setSvc] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const reduced = usePrefersReducedMotion();
  const panelRef = useRef(null);
  const tabRefs = useRef([]);

  const category = SERVICE_CATEGORIES[cat];
  const autoplay = !reduced && inView;

  // Only autoplay while the panel is on screen.
  useEffect(() => {
    const el = panelRef.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Navbar "Service" menu can pick a category.
  useEffect(() => {
    const onSelect = (e) => {
      const i = SERVICE_CATEGORIES.findIndex((c) => c.id === e.detail);
      if (i >= 0) { setCat(i); setSvc(0); }
    };
    window.addEventListener('ideo:select-service', onSelect);
    return () => window.removeEventListener('ideo:select-service', onSelect);
  }, []);

  const selectCat = (i) => { setCat(i); setSvc(0); };

  const advance = () => {
    if (svc < category.services.length - 1) setSvc(svc + 1);
    else { setCat((cat + 1) % SERVICE_CATEGORIES.length); setSvc(0); }
  };

  const onTabKey = (e) => {
    const n = SERVICE_CATEGORIES.length;
    let next = null;
    if (e.key === 'ArrowRight') next = (cat + 1) % n;
    if (e.key === 'ArrowLeft') next = (cat - 1 + n) % n;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = n - 1;
    if (next !== null) {
      e.preventDefault();
      selectCat(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="services" className="services section-dark">
      <div className="container">
        <h2 className="h-section services__title" data-reveal>
          What We Do.{' '}
          <span className="muted">
            From shaping an idea to improving an existing product, we help businesses create digital experiences
            that are useful, intuitive, and visually distinctive.
          </span>
        </h2>

        <div
          ref={panelRef}
          className="svc-panel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          data-reveal
        >
          <div className="svc-tabs" role="tablist" aria-label="Service categories">
            {SERVICE_CATEGORIES.map((c, i) => (
              <button
                key={c.id}
                ref={(el) => { tabRefs.current[i] = el; }}
                role="tab"
                id={`svc-tab-${c.id}`}
                aria-selected={i === cat}
                aria-controls="svc-tabpanel"
                tabIndex={i === cat ? 0 : -1}
                className={`svc-tab ${i === cat ? 'is-active' : ''}`}
                onClick={() => selectCat(i)}
                onKeyDown={onTabKey}
              >
                <span className="svc-tab__label">{c.label}</span>
                <span className="svc-tab__num">0{i + 1}</span>
              </button>
            ))}
          </div>

          <div className="svc-body" id="svc-tabpanel" role="tabpanel" aria-labelledby={`svc-tab-${category.id}`}>
            <div className="svc-body__left">
              <div className="svc-progress" aria-hidden="true">
                {category.services.map((s, i) => (
                  <button
                    key={s.name}
                    tabIndex={-1}
                    className="svc-progress__bar"
                    onClick={() => setSvc(i)}
                  >
                    <span
                      key={`${cat}-${svc}`}
                      className={`svc-progress__fill ${i < svc ? 'is-done' : ''} ${i === svc ? 'is-current' : ''}`}
                      style={{
                        animationDuration: `${AUTOPLAY_MS}ms`,
                        animationPlayState: autoplay && !paused ? 'running' : 'paused',
                        ...(autoplay ? {} : i === svc ? { animation: 'none', width: '100%' } : {}),
                      }}
                      onAnimationEnd={i === svc ? advance : undefined}
                    />
                  </button>
                ))}
              </div>

              <ul className="svc-list">
                {category.services.map((s, i) =>
                  i === svc ? (
                    <li key={s.name} className="svc-card">
                      <h3 className="svc-card__name">{s.name.toUpperCase()}</h3>
                      <p className="svc-card__desc">{s.description}</p>
                      <a href="#contact" className="btn btn--secondary btn--sm">
                        Book an intro call
                        <img src={ASSETS.moveRight} alt="" className="btn__icon" />
                      </a>
                    </li>
                  ) : (
                    <li key={s.name}>
                      <button className="svc-chip" onClick={() => setSvc(i)} aria-label={`Show ${s.name}`}>
                        <span>{s.name.toUpperCase()}</span>
                        <span className="svc-chip__plus"><img src={ASSETS.plus} alt="" width="16" height="16" /></span>
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="svc-body__media">
              {/* Only one service image exists in the design; reused for every category. */}
              <img key={`${cat}-${svc}`} src={ASSETS.services} alt="" className="svc-body__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
