import AnimatedSection from './AnimatedSection'
import ImageWithShimmer from './ImageWithShimmer'
import { IMAGES } from '../assets/images'

export default function Instructor() {
  return (
    <section className="section py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <AnimatedSection>
        <div className="overflow-hidden rounded-[2.5rem]">
          <ImageWithShimmer src={IMAGES.INSTRUCTOR} alt="Instructor" ratio="4/3" />
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div>
          <div className="eyebrow">Yoga Instructor</div>
          <h2 className="display-title text-4xl md:text-5xl text-gray-800">Emilly Burton</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lobortis elementum nibh tellus molestie. Turpis nunc eget lorem dolor sed. Varius duis at consectetur
            lorem donec massa sapien faucibus. Quis imperdiet massa tincidunt nunc. Vitae sapien pellentesque habitant
            morbi tristique senectus et netus.
          </p>
          <button className="mt-6 px-6 py-3 border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition">View Team</button>
        </div>
      </AnimatedSection>
    </section>
  )
}

