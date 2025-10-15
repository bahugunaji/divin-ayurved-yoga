import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Classes from './components/Classes/Classes'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Classes />
      {/* <Instructors /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

