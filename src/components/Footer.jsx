import { MapPin } from 'lucide-react';
import { siteImages } from '../data/siteData.js';

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="0.7"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="footer-background"
        aria-hidden="true"
      />

      <div className="footer-content">
        <div className="footer-left">
          <a
            className="footer-contact-link"
            href="https://www.google.com/maps/search/?api=1&query=1094+Gordon+St+Sudbury+Ontario+Canada"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View 1094 Gordon Street on Google Maps"
          >
            <MapPin
              className="footer-icon"
              size={36}
              strokeWidth={2}
            />

            <span>
              1094 Gordon St, Sudbury Ontario Canada
            </span>
          </a>

          <a
            className="footer-instagram-link"
            href="https://www.instagram.com/boho_meets_modern_airbnb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Tuer Accommodations on Instagram"
          >
            <InstagramIcon className="footer-icon" />
            <span className="footer-instagram-label">
              Instagram — @boho_meets_modern_airbnb
            </span>
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
          <img
            className="footer-logo"
            src={siteImages.logo}
            alt="Tuer Accommodations"
          />
        </div>
      </div>
    </footer>
  );
}