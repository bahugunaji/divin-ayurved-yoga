import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Classes from './components/Classes/Classes'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './components/Admin/Admin'
import DietPlanSection from './components/DietPlan/DietPlan'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Hero />
            <About />
            <Classes />
            <DietPlanSection />
            {/* <Instructors /> */}
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

