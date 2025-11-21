import { makeWhatsAppLink } from '../lib/whatsapp'

const PHONE = '911234567890'

export default function OfferSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-amber-500">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            20% OFF on Your First Order
          </h2>
          <p className="text-amber-100 text-sm max-w-md">
            Show this page at the counter or order via WhatsApp and enjoy a sweet welcome 
            offer on your first bill.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={makeWhatsAppLink(PHONE, 'Hi, I saw the 20% OFF offer and want to order.')}
            className="px-5 py-2 bg-white text-primary rounded-full text-sm font-medium"
          >
            Claim on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
