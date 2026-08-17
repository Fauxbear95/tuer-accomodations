import {
  littleExtras,
  littleExtrasImages,
  unitGallerySections,
} from '../data/siteData.js';

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      {/* =========================
          THE LITTLE EXTRAS
      ========================= */}

      <div className="little-extras-section">
        <div className="little-extras-layout">
          <div className="little-extras-content">
            <h2 className="little-extras-title">
              THE LITTLE
              <br />
              EXTRAS
            </h2>

            <ul className="little-extras-list">
              {littleExtras.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="little-extras-images">
            <div className="little-extras-photo">
              <img
                src={littleExtrasImages.patio}
                alt="Private patio placeholder"
              />
            </div>

            <div className="little-extras-photo">
              <img
                src={littleExtrasImages.outdoor}
                alt="Outdoor area placeholder"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          UNIT GALLERY SECTIONS
      ========================= */}

      <div className="unit-gallery-section">
        {unitGallerySections.map((section) => (
          <div
            className={`unit-gallery-block unit-gallery-${section.id}`}
            key={section.id}
          >
            <div className="unit-gallery-heading">
              <h2>{section.unit}</h2>
              <p>{section.subtitle}</p>
            </div>

            <div
              className={`unit-gallery-images unit-gallery-images-${section.layout}`}
            >
              {section.images.map((image, index) => (
                <div
                  className={`unit-gallery-photo unit-gallery-photo-${index + 1}`}
                  key={`${section.id}-${index}`}
                >
                  <img
                    src={image}
                    alt={`${section.unit} ${section.subtitle} placeholder ${
                      index + 1
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}