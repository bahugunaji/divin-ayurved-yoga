export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-50">
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-serif text-gray-800 leading-tight">
          YOGA STUDIO <br /> ASHTANGA
        </h1>
        <p className="mt-4 text-gray-600">By Emilly Burton</p>
        <button className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700">
          Book Class
        </button>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src="/assets/yoga-pose.png"
          alt="Yoga Pose"
          className="w-[320px] md:w-[400px] lg:w-[500px] object-cover"
        />
      </div>
    </section>
  );
}


