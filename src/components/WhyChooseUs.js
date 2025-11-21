export default function WhyChooseUs() {
  const items = [
    {
      title: "Freshly Baked Daily",
      text: "All our breads, croissants, and pastries are baked fresh every morning.",
    },
    {
      title: "Specialty Coffee Beans",
      text: "We use carefully sourced beans, roasted for a smooth, rich flavor.",
    },
    {
      title: "Cozy Work & Chill Space",
      text: "Free Wi-Fi, plenty of plug points, and a quiet corner for everyone.",
    },
  ]

  return (
    <section id="why" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-dark mb-3">Why Bean &amp; Butter?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          We&apos;re more than just a café. We&apos;re your neighborhood spot for conversations, 
          solo reading sessions, and everything in between.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-cream border border-amber-100 rounded-2xl p-5 shadow-sm"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
