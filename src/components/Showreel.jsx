import { useEffect, useRef, useState } from 'react';
import { ASSETS } from '../data/content.js';
import { usePrefersReducedMotion, useScrollProgress } from '../hooks/useMotion.js';

/* PLACEHOLDER: no reel video exists yet. The poster opens a dialog that says so;
   drop the video URL into REEL_SRC when it is ready. */
const REEL_SRC = '';

export default function Showreel() {
  const sectionRef = useRef(null);
  const dialogRef = useRef(null);
  const progress = useScrollProgress(sectionRef);
  const reduced = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);

  // Placeholder "scroll to enlarge": grows the poster as the section passes centre.
  const grow = reduced ? 0 : Math.max(0, Math.min(1, (progress - 0.3) / 0.4));
  const scale = 1 + grow * 0.35;

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <section ref={sectionRef} className="showreel section-light" aria-label="Show reel">
      <div className="showreel__text marquee" aria-hidden="true">
        <div className="marquee-track" style={{ '--marquee-duration': '24s' }}>
          <span>WATCH SHOW REEL&nbsp;</span>
          <span>WATCH SHOW REEL&nbsp;</span>
          <span>WATCH SHOW REEL&nbsp;</span>
          <span>WATCH SHOW REEL&nbsp;</span>
        </div>
      </div>

      <button
        className="showreel__poster"
        style={{ transform: `translateX(-50%) scale(${scale})` }}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <img src={ASSETS.showreel} alt="" loading="lazy" />
        <span className="showreel__play" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
        </span>
        <span className="visually-hidden">Play show reel</span>
      </button>

      <p className="showreel__hint" style={{ opacity: 1 - grow }}>
        <i aria-hidden="true" />
        SCROLL TO ENLARGE
      </p>

      <dialog
        ref={dialogRef}
        className="reel-dialog"
        onClose={() => setOpen(false)}
        onClick={(e) => { if (e.target === dialogRef.current) setOpen(false); }}
      >
        <button className="reel-dialog__close" onClick={() => setOpen(false)} aria-label="Close">×</button>
        {REEL_SRC ? (
          <video src={REEL_SRC} controls autoPlay playsInline poster={ASSETS.showreel} />
        ) : (
          <div className="reel-dialog__placeholder">
            <img src={ASSETS.showreel} alt="" />
            <p>Show reel coming soon.</p>
          </div>
        )}
      </dialog>
    </section>
  );
}
