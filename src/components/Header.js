import { makeWhatsAppLink } from '../lib/whatsapp'

const PHONE = '911234567890'

export default function Header() {
  return (
    <header className="bg-cream/80 backdrop-blur shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <div>
            <h1 className="font-semibold text-dark">Bean &amp; Butter Café</h1>
            <p className="text-xs text-gray-500">Coffee • Bakery • Cozy Vibes</p>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          <a href="#specials" className="text-gray-700 hover:text-primary">
            Specials
          </a>
          <a href="#why" className="text-gray-700 hover:text-primary">
            Why Us
          </a>
          <a href="#gallery" className="text-gray-700 hover:text-primary">
            Gallery
          </a>
          <a href="#location" className="text-gray-700 hover:text-primary">
            Visit Us
          </a>
          <a
            href={makeWhatsAppLink(PHONE, 'Hi, I want to order from Bean & Butter.')}
            className="hidden sm:inline-block bg-primary text-white px-3 py-1 rounded-full"
          >
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
