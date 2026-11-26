import { useEffect, useRef, useState } from 'react';
import { ASSETS, TESTIMONIALS } from '../data/content.js';
import { usePrefersReducedMotion } from '../hooks/useMotion.js';

const AUTOPLAY_MS = 7000;

export default function Testimonials() {
  const count = TESTIMONIALS.length;
  const [index, setIndex] = useState(Math.floor(count / 2));
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const drag = useRef(null);

  const go = (i) => setIndex((i + count) % count);

  useEffect(() => {
    if (reduced || paused) return undefined;
    const t = setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, reduced]); // eslint-disable-line react-hooks/exhaustive-deps

  const onPointerDown = (e) => { drag.current = { x: e.clientX }; };
  const onPointerUp = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    drag.current = null;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
  };

  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
  };

  return (
    <section className="testimonials section-dark" aria-roledescription="carousel" aria-label="Client reviews">
      <div className="container">
        <h2 className="h-section testimonials__title" data-reveal>
          WHAT CLIENTS SAY. <span className="muted">IN THEIR OWN WORDS.</span>
        </h2>
      </div>

      <div
        className="tcarousel"
        tabIndex={0}
        onKeyDown={onKey}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { drag.current = null; }}
      >
        <ul className="tcarousel__track" style={{ '--index': index }} aria-live="polite">
          {TESTIMONIALS.map((t, i) => {
            const offset = i - index;
            return (
              <li
                key={t.id}
                className={`tcard ${offset === 0 ? 'is-active' : ''}`}
                style={{ '--rot': `${Math.max(-2, Math.min(2, offset)) * 3}deg` }}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={offset !== 0}
                onClick={() => offset !== 0 && go(i)}
              >
                <div className="tcard__top">
                  <img src={ASSETS.stars} alt="5 out of 5 stars" width="142" height="22" />
                  <img src={ASSETS.google} alt="Google review" width="29" height="30" />
                </div>
                <blockquote className="tcard__quote">{t.review}</blockquote>
                <div className="tcard__by">
                  <span className="tcard__avatar" aria-hidden="true">{t.initial}</span>
                  <div>
                    <p className="tcard__name">{t.name}</p>
                    <p className="tcard__date">{t.date}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="tcontrols">
        <button className="btn btn--icon" onClick={() => go(index - 1)} aria-label="Previous review">
          <img src={ASSETS.arrowLeft} alt="" width="16" height="16" />
        </button>
        <div className="tcontrols__dots">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              className={`tdot ${i === index ? 'is-active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Show review ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
        <button className="btn btn--icon" onClick={() => go(index + 1)} aria-label="Next review">
          <img src={ASSETS.arrowRight} alt="" width="16" height="16" />
        </button>
      </div>
    </section>
  );
}
