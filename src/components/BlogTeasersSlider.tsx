import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogPosts = [
  {
    date: "AUG 17",
    title: "Yoga changes the way we see things, it transforms us",
    author: "Carrie Stone",
    category: "Aero, Meditation",
    image: "/images/blog1.jpg",
  },
  {
    date: "MAY 13",
    title: "Handmade soaps in our studio",
    author: "Carrie Stone",
    category: "Aero, Meditation",
    image: "/images/blog2.jpg",
  },
  {
    date: "JUN 12",
    title: "Yoga in nature is next level of commitment",
    author: "Carrie Stone",
    category: "Aero, Meditation",
    image: "/images/blog3.jpg",
  },
  {
    date: "JUN 24",
    title: "Overcoming barriers through practice",
    author: "Carrie Stone",
    category: "Aero, Meditation",
    image: "/images/blog4.jpg",
  },
];

export default function BlogSlider() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide bg-[#2c3e36] inline-block text-white px-3 py-1 rounded">
          READ & BE INSPIRED
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogPosts.map((post, i) => (
          <SwiperSlide key={i}>
            <div className="group cursor-pointer">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-lg w-full h-72 object-cover"
                />
                <span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-bold shadow">
                  {post.date}
                </span>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                By {post.author} / {post.category}
              </div>
              <h3 className="font-semibold text-lg mt-1 group-hover:text-green-800 transition">
                {post.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
