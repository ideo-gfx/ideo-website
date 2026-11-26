import { useState } from 'react';
import { EMAIL } from '../data/content.js';

export default function LetsTalk() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="talk section-light">
      <div className="container talk__inner" data-reveal>
        <h2 className="talk__title">Have an Idea in Mind?</h2>
        <p className="talk__lead">
          Let&rsquo;s understand what you&rsquo;re building and explore how thoughtful design can help move it forward.
        </p>
        <div className="talk__actions">
          <a href={`mailto:${EMAIL}?subject=New%20project%20enquiry`} className="btn btn--primary btn--sm">Let&rsquo;s talk</a>
          <a href={`mailto:${EMAIL}`} className="btn btn--secondary btn--sm">Mail to Us</a>
          <button className="talk__copy" onClick={copyEmail} aria-live="polite">
            {copied ? 'Email copied ✓' : `or copy ${EMAIL}`}
          </button>
        </div>
      </div>
    </section>
  );
}
