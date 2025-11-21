import { makeWhatsAppLink } from '../lib/whatsapp'

const PHONE = '911234567890'

export default function LocationSection() {
  return (
    <section id="location" className="bg-cream">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold text-dark mb-3">Visit Us</h2>
          <p className="text-gray-600 mb-3">
            Bean &amp; Butter Café, High Street, Your City, India
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Timings:</span> 8:00 AM – 10:00 PM (All days)
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Phone:</span> +91 12345 67890
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href={`tel:+${PHONE}`}
              className="px-4 py-2 rounded-full border border-primary text-primary text-sm"
            >
              Call Café
            </a>
            <a
              href={makeWhatsAppLink(PHONE, 'Hi, I want to reserve a table at Bean & Butter.')}
              className="px-4 py-2 rounded-full bg-primary text-white text-sm"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-xs text-gray-500">
            Note: This is a demo café landing page built for portfolio purposes.
          </p>
        </div>

        <div className="w-full h-64 rounded-2xl overflow-hidden border border-amber-200">
          <iframe
            title="Café location map"
            src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
