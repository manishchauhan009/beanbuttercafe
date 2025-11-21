import Header from './components/Header'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Specials from './components/Specials'
import OfferSection from './components/OfferSection'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <Specials />
        <OfferSection />
        <Testimonials />
        <Gallery />
        <LocationSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
