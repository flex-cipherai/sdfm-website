import { Link } from 'react-router-dom';
import { site } from '../config/site';
import { industries } from '../data/industries';
import { openCookiePreferences } from '../lib/consent';
import { InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import logoWhite from '../assets/images/sdfm-logo-white.png';
import './SiteFooter.css';

export default function SiteFooter() {
  const { contact, social } = site;
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <img src={logoWhite} alt="SDFM Group Limited" width={162} height={36} className="footer__logo" />
            <p className="footer__tagline">{site.tagline}</p>
          </div>
          <div className="footer__social">
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="SDFM Group on LinkedIn">
              <LinkedInIcon />
            </a>
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="SDFM Group on Instagram">
                <InstagramIcon />
              </a>
            )}
          </div>
        </div>

        <div className="footer__cols">
          <div>
            <p className="footer__label">Industries</p>
            <ul className="footer__list">
              {industries.map((it) => (
                <li key={it.href}>
                  <Link to={it.href} className="flink">
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer__label">Resources</p>
            <ul className="footer__list">
              <li>
                <Link to="/guides" className="flink">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/ai-gap-check" className="flink">
                  Free AI check
                </Link>
              </li>
              <li>
                <Link to="/sample-report" className="flink">
                  Sample report
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer__label">Company</p>
            <ul className="footer__list">
              <li>
                <Link to="/custom-builds" className="flink">
                  Custom builds
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flink">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="flink">
                  Privacy policy
                </Link>
              </li>
              <li>
                <button type="button" className="flink footer__btn" onClick={openCookiePreferences}>
                  Cookie preferences
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer__label">Get in touch</p>
            <ul className="footer__list">
              {contact.whatsapp && (
                <li>
                  <a href={`https://wa.me/${contact.whatsapp}`} className="flink footer__contact" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                </li>
              )}
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="flink footer__contact">
                    <PhoneIcon />
                    {contact.phone}
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${contact.email}`} className="flink footer__contact">
                  <MailIcon />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__legal">© {year} SDFM Group Limited.</p>
      </div>
    </footer>
  );
}
