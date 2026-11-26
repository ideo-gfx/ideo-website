import { ADDRESS, ASSETS, EMAIL, FOOTER_PAGES, FOOTER_SOCIAL, PHONE, PHONE_HREF } from '../data/content.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer section-light">
      <div className="container footer__inner">
        <div className="footer__main">
          <div className="footer__cols">
            <div className="footer__col">
              <p className="footer__label">Pages</p>
              <ul>
                {FOOTER_PAGES.map((l) => <li key={l.label}><a className="footer__link" href={l.href}>{l.label}</a></li>)}
              </ul>
            </div>
            <div className="footer__col">
              <p className="footer__label">Follow us</p>
              <ul>
                {FOOTER_SOCIAL.map((l) => (
                  <li key={l.label}><a className="footer__link" href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <address className="footer__col footer__contact">
              <p className="footer__label">Contact Us</p>
              <p className="footer__address">{ADDRESS}</p>
              <a className="footer__phone footer__link" href={PHONE_HREF}>{PHONE}</a>
              <a className="footer__email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </address>
          </div>
          <div className="footer__legal">
            <p>{year}-IDEO</p>
            <p>
              <a href="#" className="footer__legal-link">Privacy policy</a> .{' '}
              <a href="#" className="footer__legal-link">Terms &amp; Conditions</a>
            </p>
          </div>
        </div>
        <div className="footer__art">
          <img src={ASSETS.footerArt} alt="" loading="lazy" className="float-idle" />
        </div>
      </div>
      <a href="#top" className="to-top" aria-label="Back to top">↑</a>
    </footer>
  );
}
