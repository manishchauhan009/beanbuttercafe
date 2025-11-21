export default function Testimonials() {
  const testimonials = [
    {
      name: 'Aarav',
      text: 'The hazelnut cappuccino is my go-to. Cozy place to work from.',
    },
    {
      name: 'Riya',
      text: 'Love their cheesecakes and the calm vibe. Perfect weekend spot.',
    },
  ]

  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-dark mb-3">What people say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((item, idx) => (
            <blockquote
              key={idx}
              className="bg-white border border-amber-100 rounded-2xl p-5 shadow-sm"
            >
              <p className="text-gray-700 mb-2">“{item.text}”</p>
              <footer className="text-sm text-gray-500">— {item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
