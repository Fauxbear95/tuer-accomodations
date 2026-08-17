export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <img src="/images/hero.svg" alt="" />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-welcome">WELCOME TO</p>

        <h1 className="hero-title">
          Tuer Accommodations
        </h1>

        <a
          className="button hero-request-button"
          href="#availability"
        >
          REQUEST
        </a>
      </div>
    </section>
  );
}