import { makeWhatsAppLink } from '../lib/whatsapp'

const PHONE = '911234567890'

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase text-xs tracking-[0.2em] text-gray-500 mb-2">
            Welcome to Bean &amp; Butter
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4 leading-tight">
            Fresh Coffee. Warm Pastries. Cozy Vibes.
          </h2>
          <p className="text-gray-600 mb-6">
            A neighborhood café serving freshly brewed coffee, oven-baked pastries, 
            and peaceful corners to work, read, or just slow down.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={makeWhatsAppLink(PHONE, 'Hi, I want to place an order / table booking.')}
              className="px-5 py-2 rounded-full bg-primary text-white text-sm"
            >
              Order on WhatsApp
            </a>
            <a
              href="#specials"
              className="px-5 py-2 rounded-full border border-primary text-primary text-sm"
            >
              View Today&apos;s Specials
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Open daily • 8:00 AM – 10:00 PM
          </p>
        </div>

        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-md">
          <img
            src="/images/cafe-hero.jpg"
            alt="Coffee and pastries on a wooden table"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
