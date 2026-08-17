const calendarUnits = [
  {
    id: 'upper-unit',
    title: 'UPPER UNIT',
  },
  {
    id: 'lower-unit',
    title: 'LOWER UNIT',
  },
  {
    id: 'entire-duplex',
    title: 'ENTIRE DUPLEX',
  },
];

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
          href="#contact"
        >
          REQUEST
        </a>
      </div>

      <div className="availability-calendar-panel">
        <div className="availability-panel-overlay" />

        <div className="availability-calendars">
          {calendarUnits.map((unit) => (
            <div
              className="availability-calendar-column"
              key={unit.id}
            >
              <h3>{unit.title}</h3>

              <div className="calendar-embed-placeholder">
                <span>CALENDAR</span>
                <small>Embed placeholder</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}