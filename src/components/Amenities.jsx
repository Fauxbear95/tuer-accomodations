import {
  bathroomAmenities,
  kitchenAmenities,
  amenityImages,
} from '../data/siteData.js';

export default function Amenities() {
  return (
    <section className="amenities-section">
      <div className="amenities-container">
        <h2 className="amenities-title">AMENITIES</h2>

        <div className="amenities-top">
          <ul className="amenities-list amenities-list-left">
            {bathroomAmenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>

          <div className="amenities-bathroom-images">
            <div className="amenity-photo amenity-photo-tall">
              <img
                src={amenityImages.bathroomMain}
                alt="Bathroom placeholder"
              />
            </div>

            <div className="amenities-bathroom-stack">
              <div className="amenity-photo">
                <img
                  src={amenityImages.bathroomDetailOne}
                  alt="Bathroom detail placeholder"
                />
              </div>

              <div className="amenity-photo">
                <img
                  src={amenityImages.bathroomDetailTwo}
                  alt="Bathroom detail placeholder"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="amenities-bottom">
          <div className="amenities-kitchen-images">
            <div className="amenity-photo amenity-photo-wide">
              <img
                src={amenityImages.kitchenDetailOne}
                alt="Kitchen detail placeholder"
              />
            </div>

            <div className="amenity-photo amenity-photo-wide">
              <img
                src={amenityImages.kitchenDetailTwo}
                alt="Kitchen detail placeholder"
              />
            </div>

            <div className="amenity-photo amenity-photo-wide">
              <img
                src={amenityImages.kitchenDetailThree}
                alt="Kitchen detail placeholder"
              />
            </div>
          </div>

          <ul className="amenities-list amenities-list-right">
            {kitchenAmenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}