import { MARQUEE_SERVICES } from '../data/content.js';

export default function ServicesMarquee() {
  return (
    <div className="svc-marquee marquee" aria-label="Our capabilities">
      <div className="marquee-track" style={{ '--marquee-duration': '40s' }}>
        {[0, 1].map((copy) => (
          <ul className="svc-marquee__set" key={copy} aria-hidden={copy === 1}>
            {MARQUEE_SERVICES.map((s) => (
              <li key={s}>
                <span>{s}</span>
                <i className="svc-marquee__diamond" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
