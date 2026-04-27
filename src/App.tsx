import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import ContactUs from './component/ContactUs'
import About from './component/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
