import AnimatedSection from './AnimatedSection'
import ImageWithShimmer from './ImageWithShimmer'
import { IMAGES } from '../assets/images'

export default function Hero() {
  return (
    <section className="section py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <AnimatedSection>
        <div className="max-w-2xl">
          <h1 className="display-title text-[clamp(2.8rem,6vw,6.5rem)] text-gray-800">
            Divine Ayurved Yoga  (Shree Shakti ayurveda panchakarma Yoga)
          </h1>
          <p className="mt-3 text-gray-600">By Sanjan Nautiyal</p>
          <button className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700">
            Book Class
          </button>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="max-w-xl mx-auto">
          <ImageWithShimmer src={IMAGES.HERO_POSE} alt="Yoga Pose" ratio="4/5" />
        </div>
      </AnimatedSection>
    </section>
  );
}


