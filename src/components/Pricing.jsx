import { PRICING } from '../data/content.js';

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="h-section pricing__title" data-reveal>BUILD YOUR<br />PRICE.</h2>
        <div className="pricing__grid">
          {PRICING.map((p, i) => (
            <article
              key={p.label}
              className="price-card"
              style={{ background: p.tone, '--reveal-index': i }}
              data-reveal
            >
              <p className="price-card__label">{p.label}</p>
              <p className="price-card__price">{p.price}</p>
              <p className="price-card__per">per month</p>
              <ul className="price-card__features">
                {p.features.map((f) => (
                  <li key={f}><span aria-hidden="true">✓</span> {f}</li>
                ))}
              </ul>
              {p.meter != null && (
                <div className="price-card__meter" role="img" aria-label={`Capacity ${p.meter}% booked`}>
                  <span style={{ '--meter': `${p.meter}%` }} />
                </div>
              )}
              {p.note && <p className="price-card__note">{p.note}</p>}
              <a href="#contact" className="btn btn--primary btn--sm price-card__cta">Choose {p.label.split('·').pop().trim()}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
