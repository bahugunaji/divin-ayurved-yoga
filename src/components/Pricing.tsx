import AnimatedSection from './AnimatedSection'

const plans = [
  { name: 'Basic', desc: '8 group classes per month', price: 49 },
  { name: 'Intermediate', desc: '12 group classes per month', price: 69 },
  { name: 'Advanced', desc: '20 group classes per month', price: 89 },
  { name: 'Prenatal', desc: '10 group classes per month', price: 79 },
]

export default function Pricing() {
  return (
    <section className="section py-20">
      <AnimatedSection>
        <h2 className="display-title text-4xl md:text-5xl text-center text-gray-800">Yoga classes monthly prices</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border p-8 bg-white/70">
              <div className="uppercase tracking-wide text-gray-700 font-semibold">{p.name}</div>
              <p className="mt-2 text-gray-500">{p.desc}</p>
              <div className="mt-6 text-4xl font-semibold text-gray-800">${p.price}</div>
              <button className="mt-6 w-full px-4 py-2 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition">Purchase</button>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

