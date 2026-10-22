import {
  availabilityCalendars,
  contactEmail,
  siteImages,
} from '../data/siteData.js';

export default function Availability() {
  return (
    <section className="availability-section" id="availability">
      <div className="availability-heading">
        <h2 className="availability-title">
          AVAILABILITY
        </h2>

        <p className="availability-subtitle">
          Two self-contained living areas offer privacy and flexibility.
        </p>

        <a
          className="availability-request-button"
          href={`mailto:${contactEmail}`}
        >
          REQUEST
        </a>
      </div>

      <div
        className="availability-calendar-panel"
        style={{
          '--availability-background-image': `url(${siteImages.backgrounds.availability})`,
        }}
      >
        <div className="availability-panel-overlay" />

        <div className="availability-calendars">
          {availabilityCalendars.map((calendar) => (
            <div
              className="availability-calendar-column"
              key={calendar.id}
            >
              <h3>{calendar.title}</h3>

              <iframe
                className="availability-calendar-frame"
                src={calendar.url}
                title={`${calendar.title} availability calendar`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
