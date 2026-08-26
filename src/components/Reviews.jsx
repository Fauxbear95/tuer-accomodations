import { reviews } from '../data/reviewsData.js';
import { siteImages } from '../data/siteData.js';

export default function Reviews() {
  return (
    <section
      className="reviews-section"
      id="reviews"
      style={{
        '--reviews-background-image': `url(${siteImages.backgrounds.reviews})`,
      }}
    >
      <div className="container reviews-container">
        <h2 className="reviews-title">REVIEWS</h2>

        <p className="reviews-subtitle">
          From cozy weekends to unforgettable getaways, hear what our guests
          have to say about their stays.
        </p>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <span className="review-quote-mark" aria-hidden="true">
                “
              </span>

              <p className="review-text">{review.quote}</p>

              <p className="review-author">{review.author}</p>

              <p className="review-location">{review.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}