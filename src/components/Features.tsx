import AnimatedSection from './AnimatedSection'

const items = [
  { title: 'Vinyasa Yoga', description: 'Duis aute irure dolor in reprehenderit in voluptate velit es cillum.' },
  { title: 'Ashtanga', description: 'Duis aute irure dolor in reprehenderit in voluptate velit es cillum.' },
  { title: 'Hatha Yoga', description: 'Duis aute irure dolor in reprehenderit in voluptate velit es cillum.' },
  { title: 'Vinyasa', description: 'Duis aute irure dolor in reprehenderit in voluptate velit es cillum.' }
]

export default function Features() {
  return (
    <section className="section py-16">
      <AnimatedSection>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="text-center">
              <div className="mx-auto mb-4 h-10 w-10 rounded-full border border-gray-300" />
              <div className="font-semibold tracking-wide uppercase text-gray-700 text-sm">{it.title}</div>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{it.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

