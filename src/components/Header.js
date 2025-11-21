import { useState } from 'react'
import { makeWhatsAppLink } from '../lib/whatsapp'

const PHONE = '911234567890'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="bg-cream/80 backdrop-blur shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
            B
          </div>
          <div>
            <h1 className="font-semibold text-dark">Bean &amp; Butter Café</h1>
            <p className="text-xs text-gray-500">Coffee • Bakery • Cozy Vibes</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
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

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              // X icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-amber-100 bg-cream/95 backdrop-blur">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            <a
              href="#specials"
              className="text-gray-700 hover:text-primary"
              onClick={closeMenu}
            >
              Specials
            </a>
            <a
              href="#why"
              className="text-gray-700 hover:text-primary"
              onClick={closeMenu}
            >
              Why Us
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-primary"
              onClick={closeMenu}
            >
              Gallery
            </a>
            <a
              href="#location"
              className="text-gray-700 hover:text-primary"
              onClick={closeMenu}
            >
              Visit Us
            </a>
            <a
              href={makeWhatsAppLink(PHONE, 'Hi, I want to order from Bean & Butter.')}
              className="mt-1 inline-flex items-center justify-center bg-primary text-white px-3 py-2 rounded-full"
              onClick={closeMenu}
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
