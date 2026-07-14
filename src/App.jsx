import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Videos from './components/Videos'
import Contact from './components/Contact'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'

function App() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Show modal after 3 seconds on first visit
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      <Header onContactClick={() => setShowModal(true)} />
      <Hero onContactClick={() => setShowModal(true)} />
      <Services />
      <Projects />
      <Testimonials />
      <Videos />
      <Contact onContactClick={() => setShowModal(true)} />
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Footer />
    </div>
  )
}

export default App
