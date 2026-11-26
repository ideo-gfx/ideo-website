import { PROCESS_STEPS } from '../data/content.js';

export default function Process() {
  return (
    <section className="process section-dark">
      <div className="container">
        <h2 className="h-section process__title" data-reveal>HOW WE WORK.</h2>
        <ol className="process__cards">
          {PROCESS_STEPS.map((s, i) => (
            <li
              key={s.title}
              className={`pcard ${s.highlight ? 'pcard--brand' : ''}`}
              style={{ '--rot': `${s.rotate}deg`, '--offset': `${s.offset}px`, '--reveal-index': i }}
              data-reveal
              tabIndex={0}
            >
              <span className="pcard__num">{i + 1}.</span>
              <div>
                <h3 className="pcard__title">{s.title}</h3>
                <p className="pcard__text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
