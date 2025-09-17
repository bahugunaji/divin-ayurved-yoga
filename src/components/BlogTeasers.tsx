const posts = [
  { date: 'May 13', title: 'Handmade soaps in our studio' },
  { date: 'Jun 12', title: 'Yoga in nature is next level of commitment' },
  { date: 'Jun 24', title: 'Overcoming barriers to a daily practice' },
  { date: 'Jul 16', title: 'Retreats are made to help you connect with yourself' },
  { date: 'Aug 8', title: 'How to break the cycle of negative thoughts' },
  { date: 'Aug 17', title: 'Yoga changes the way we see things, it transforms us' },
]

import AnimatedSection from './AnimatedSection'

export default function BlogTeasers() {
  return (
    <section className="section py-20 blog-grid">
      <AnimatedSection>
        <h2 className="display-title text-4xl md:text-5xl text-center text-gray-800">Read & be inspired</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="aspect-[16/10] bg-gray-200 rounded-2xl mb-4" />
            <div className="date text-sm text-gray-700 inline-block">{post.date}</div>
              <h3 className="mt-1 text-xl font-semibold text-gray-800 group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              <button className="mt-3 text-gray-800 underline underline-offset-4">Read More</button>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

