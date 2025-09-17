import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import AnimatedSection from './AnimatedSection'
import { IMAGES } from '../assets/images'

const slides = [
  { title: 'YOGA STUDIO ASHTANGA', subtitle: 'By Emilly Burton', image: IMAGES.HERO_POSE },
  { title: 'FIND YOUR BALANCE', subtitle: 'Practice with us', image: IMAGES.MEDITATION },
]

export default function HeroSlider() {
  return (
    <section className="section py-6 md:py-10">
      <AnimatedSection>
        <Swiper modules={[Autoplay, Pagination, EffectFade]} autoplay={{ delay: 4500 }} effect="fade" loop pagination={{ clickable: true }}>
          {slides.map((s) => (
            <SwiperSlide key={s.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 md:py-16">
                <div className="max-w-2xl">
                  <h2 className="display-title text-[clamp(2.6rem,6vw,6rem)] text-gray-800">{s.title}</h2>
                  <p className="mt-3 text-gray-600">{s.subtitle}</p>
                  <button className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-full">Book Class</button>
                </div>
                <div className="max-w-xl mx-auto">
                  <img src={s.image} alt="slide" className="w-full h-auto object-cover rounded-2xl" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatedSection>
    </section>
  )
}


