import { siteImages } from '../data/siteData.js';

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-grid">
        <div className="intro-content">
          <h2 className="intro-title">
            Luxurious spaces
            <br />
            that feel like home.
          </h2>

          <div className="intro-copy">
            <p>
              Welcome to Tuer Accommodations Inc. — a thoughtfully curated
              Airbnb where cozy bohemian charm meets sleek modern design.
            </p>

            <p>
              Nestled in a peaceful neighbourhood, our space is perfect Ideal
              for insurance displacement, corporate assignments, medical
              professionals, and contract workers needing temporary housing.
              This exclusive home offers 3 spacious bedrooms upstairs and 2
              bedrooms in lower unit. <strong>Fully furnished</strong>, two well
              equipped <strong>kitchens</strong>,{' '}
              <strong>in-suite laundry</strong>, fast <strong>Wi-Fi</strong>,
              and a fenced in yard overlooking Sudbury.
            </p>
          </div>
        </div>

        <div className="intro-image-wrap">
          <img
            src={siteImages.intro}
            alt="Tuer Accommodations interior placeholder"
          />
        </div>
      </div>
    </section>
  );
}