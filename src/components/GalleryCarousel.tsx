import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ImageWithShimmer from './ImageWithShimmer'
import { IMAGES } from '../assets/images'

const images = [
  { src: IMAGES.LEAF, ratio: '16/10' },
  { src: IMAGES.MEDITATION, ratio: '4/5' },
  { src: IMAGES.HERO_POSE, ratio: '4/5' },
]

export default function GalleryCarousel() {
  return (
    <section className="section py-20">
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={16} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
        {images.map((img) => (
          <SwiperSlide key={img.src}>
            <ImageWithShimmer src={img.src} alt="Gallery" ratio={img.ratio as any} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}


