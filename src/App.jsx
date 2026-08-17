import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import AboutHost from './components/AboutHost.jsx';
import Suites from './components/Suites.jsx';
import Amenities from './components/Amenities.jsx';
import Availability from './components/Availability.jsx';
import Gallery from './components/Gallery.jsx';
import Pricing from './components/Pricing.jsx';
import RulesSafety from './components/RulesSafety.jsx';
import Reviews from './components/Reviews.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Intro />
        <AboutHost />
        <Suites />
      
        <Availability />
        <Amenities />
        <Gallery />
        <Pricing />
        <RulesSafety />
        <Reviews />
      </main>

      <Footer />
    </>
  );
}