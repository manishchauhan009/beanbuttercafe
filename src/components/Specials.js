import { specials } from '../data/specials'

export default function Specials() {
  return (
    <section id="specials" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-dark mb-3">Today&apos;s Specials</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Handpicked drinks and desserts that pair perfectly with long conversations
          and short breaks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {specials.map((item) => (
            <div
              key={item.id}
              className="bg-cream rounded-2xl overflow-hidden shadow-sm border border-amber-100 flex flex-col"
            >
              <div className="h-32 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <span className="text-xs font-medium text-dark">{item.price}</span>
                </div>
                <p className="text-xs text-gray-600 flex-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
