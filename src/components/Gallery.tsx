import AnimatedSection from './AnimatedSection'
import ImageWithShimmer from './ImageWithShimmer'
import { IMAGES } from '../assets/images'

export default function Gallery() {
  return (
    <section className="section py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      <AnimatedSection>
        <ImageWithShimmer src={IMAGES.LEAF} alt="Leaf" ratio="16/10" />
      </AnimatedSection>
      <AnimatedSection>
        <ImageWithShimmer src={IMAGES.MEDITATION} alt="Meditation" ratio="4/5" />
      </AnimatedSection>
    </section>
  )
}

