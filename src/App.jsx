import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import UseCases from './pages/UseCases'
import UseCasePost from './pages/UseCasePost'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/use-cases/:slug" element={<UseCasePost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  )
}

export default App
