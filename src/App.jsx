import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import UseCases from './pages/UseCases'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/use-cases" element={<UseCases />} />
      </Routes>
    </>
  )
}

export default App
