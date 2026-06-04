import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import ServicesGrid from '../components/sections/ServicesGrid';
import AboutSection from '../components/sections/AboutSection';
import ProductsPreview from '../components/sections/ProductsPreview';
import ClientsMarquee from '../components/sections/ClientsMarquee';
import CtaBanner from '../components/sections/CtaBanner';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Divine Packaging Industry',
  description:
    'ISO certified packaging manufacturer with 40+ years of experience. 72,000 MT annual capacity across Chennai and Gujarat.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 45, SIDCO Industrial Estate, Ambattur',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600098',
    addressCountry: 'IN',
  },
  telephone: '+91 44 2625 XXXX',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.2451,
    longitude: 80.1837,
  },
  openingHours: 'Mo-Sa 09:00-18:00',
  url: 'https://www.divinepackaging.com',
  image: 'https://picsum.photos/seed/divine-packaging/1200/630',
  priceRange: '$$',
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Divine Packaging Industry
        </title>
        <meta
          name="description"
          content="Divine Packaging Industry — ISO 9001 certified industrial packaging manufacturer with 40+ years experience. Wooden pallets, corrugated boxes, HDPE packaging, and more. 72,000 MT annual capacity across Chennai and Gujarat."
        />
        <meta
          name="keywords"
          content="Divine packaging, wooden pallets, corrugated boxes, packaging manufacturer India, Chennai packaging, export packaging"
        />
        <link rel="canonical" href="https://www.divinepackaging.com" />
        <meta
          property="og:title"
          content="Divine Packaging Industry"
        />
        <meta
          property="og:description"
          content="ISO certified packaging manufacturer with 40+ years of experience. 72,000 MT annual capacity across Chennai and Gujarat."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <Hero />
      <StatsBar />
      <ServicesGrid />
      <AboutSection />
      <ProductsPreview />
      <ClientsMarquee />
      <CtaBanner />
    </>
  );
};

export default Home;
