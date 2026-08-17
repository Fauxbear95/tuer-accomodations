import { suites } from '../data/siteData.js';

export default function Suites() {
  return (
    <section className="rooms-section" id="rooms">
      <div className="rooms-panel">
        <h2 className="rooms-title">Our Rooms</h2>

        <div className="rooms-grid">
          {suites.map((suite) => (
            <article className="room-card" key={suite.id}>
              <div className="room-card-heading">
                <h3>{suite.title}</h3>

                <p>{suite.details}</p>
              </div>

              <div className="room-image">
                <img
                  src={suite.image}
                  alt={`${suite.title} placeholder`}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="rooms-description">
          <p>
            Fully furnished five-bedroom home for mid-term stays of 31 nights
            or longer. Ideal for insurance placements, corporate housing,
            <br className="rooms-description-break" />
            and medical or contract professionals.
            <br />
            <strong>Quiet, and professional use only.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}