import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles/global.scss';
import Features from './components/Features';
import Instructor from './components/Instructor';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import BlogTeasers from './components/BlogTeasers';
import SiteFooter from './components/SiteFooter';
import AdUnit from './components/AdUnit';
import HeroSlider from './components/HeroSlider';
import BlogTeasersSlider from './components/BlogTeasersSlider';
import GalleryCarousel from './components/GalleryCarousel';
import ContactSection from './components/ContactSection';
import RetreatSection from './components/RetreatSection';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <HeroSlider />
      <Features />
      <Instructor />
      <Gallery />
      <GalleryCarousel />
      <Schedule />
      <RetreatSection />
      <Pricing />
      <BlogTeasers />
      <BlogTeasersSlider />
      <ContactSection />
      <AdUnit className="section my-10" />
      <SiteFooter />
    </div>
  )
}
