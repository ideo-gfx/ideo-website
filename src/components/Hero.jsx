import { ASSETS, CLIENT_LOGOS } from '../data/content.js';

function Logo({ logo }) {
  if (logo.gpay) {
    return (
      <span className="logo-tile" title={logo.name}>
        <img src={ASSETS.gpayPay} alt="" style={{ position: 'absolute', inset: '34.51% 16.26% 26.23% 43.51%' }} />
        <img src={ASSETS.gpayG} alt="" style={{ position: 'absolute', inset: '32.11% 62.95% 33.23% 13.96%' }} />
        <span className="visually-hidden">{logo.name}</span>
      </span>
    );
  }
  return (
    <span className="logo-tile" title={logo.name}>
      <img
        src={logo.src}
        alt={logo.name}
        style={logo.inset ? { position: 'absolute', inset: logo.inset } : { position: 'absolute', inset: 0 }}
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero section-light">
      <div className="hero__inner container">
        <div className="hero__copy">
          <h1 className="hero__title">DESIGNING DIGITAL EXPERIENCES.</h1>
          <p className="hero__lead">
            From Kochi, we create thoughtful digital experiences through user-focused UI/UX, website and app
            design, and brand-led visual systems. From the first idea to the final interface, we make every
            interaction purposeful.
          </p>
          <div className="hero__actions">
            <a href="#services" className="btn btn--primary">Explore Our Services</a>
            <a href="#contact" className="btn btn--secondary">Start a Project</a>
          </div>
          <div className="clients">
            <span className="clients__label">TRUSTED BY</span>
            <span className="clients__divider" aria-hidden="true" />
            <div className="clients__viewport marquee" aria-label="Clients">
              <div className="marquee-track clients__track" style={{ '--marquee-duration': '20s' }}>
                {[0, 1].map((copy) => (
                  <div className="clients__set" key={copy} aria-hidden={copy === 1}>
                    {CLIENT_LOGOS.map((logo) => <Logo key={logo.name} logo={logo} />)}
                  </div>
                ))}
              </div>
              <div className="clients__fade" />
            </div>
          </div>
        </div>
        <div className="hero__media">
          <img src={ASSETS.hero} alt="Tablet showing a digital product designed by IDEO" />
        </div>
      </div>
    </section>
  );
}
