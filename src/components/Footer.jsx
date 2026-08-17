import { Instagram, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-background" />

      <div className="footer-content">
        <div className="footer-left">
          <a
            className="footer-contact-link"
            href="https://www.google.com/maps/search/?api=1&query=1094+Gordon+St+Sudbury+Ontario+Canada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin
              className="footer-icon"
              size={30}
              strokeWidth={2}
            />

            <span>
              1094 Gordon St, Sudbury Ontario Canada
            </span>
          </a>

          <a
            className="footer-instagram-link"
            href="#"
            aria-label="Instagram"
          >
            <Instagram
              className="footer-icon"
              size={28}
              strokeWidth={2}
            />
          </a>
        </div>

        <div className="footer-center">
          <a
            className="footer-request-button"
            href="#availability"
          >
            REQUEST
          </a>
        </div>

        <div className="footer-right">
          <div className="footer-logo-placeholder">
            TUER
            <span>ACCOMMODATIONS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}