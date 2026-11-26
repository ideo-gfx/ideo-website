import { ASSETS, EMAIL, TEAM } from '../data/content.js';

export default function Team() {
  return (
    <section id="team" className="team section-dark">
      <div className="container">
        <div className="team__head" data-reveal>
          <h2 className="h-section">YOU TALK TO THE PEOPLE<br />WHO MAKE IT.</h2>
          <p className="team__lead">
            We combine design, analysis, and creativity to turn business goals and user needs into meaningful
            digital solutions.
          </p>
        </div>
        <div className="team__grid">
          {TEAM.map((m, i) => (
            <figure key={i} className="member" style={{ '--reveal-index': i }} data-reveal>
              <div className="member__photo">
                <img src={m.img} alt={`${m.name}, ${m.role}`} loading="lazy" style={{ objectPosition: m.position || 'center top' }} />
              </div>
              <img src={ASSETS.teamGlow} alt="" className="member__glow" aria-hidden="true" />
              <figcaption className="member__caption">
                <span className="member__name">{m.name}</span>
                <span className="member__role">{m.role}</span>
              </figcaption>
            </figure>
          ))}
          <div className="careers" style={{ '--reveal-index': 2 }} data-reveal>
            <p className="careers__eyebrow">/ / HIRING</p>
            <h3 className="careers__title">EXPLORE CAREERS</h3>
            <p className="careers__text">
              Love building as much as coming up with ideas?<br />
              We&rsquo;re growing and looking for makers who can do both. Send us your work, not a cover letter.
            </p>
            <a href={`mailto:${EMAIL}?subject=Careers%20at%20IDEO`} className="btn btn--primary careers__cta">Mail to us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
