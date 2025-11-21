import { galleryImages } from '../data/gallery'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-dark mb-6">A peek inside</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="h-36 w-full overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
