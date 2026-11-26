import { ASSETS } from '../data/content.js';

export default function Feature() {
  return (
    <section className="feature section-light">
      <div className="container feature__inner">
        <h2 className="feature__title" data-reveal>
          ONE CREATIVE PARTNER. <span className="muted">A CLEARER DIGITAL EXPERIENCE.</span>
        </h2>
        <div className="feature__media" data-reveal>
          <img src={ASSETS.feature} alt="IDEO brand collateral celebrating 100 projects" loading="lazy" />
        </div>
        <p className="feature__body" data-reveal>
          Great digital products bring strategy, design, and usability together. At IDEO Graphics, we work
          closely with you to understand your goals, your audience, and the challenges your product needs to
          solve. We turn those insights into clear, consistent, and engaging digital experiences.
        </p>
      </div>
    </section>
  );
}
