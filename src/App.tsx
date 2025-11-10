import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { HomePage } from '@/pages/HomePage'
import { EmbedConfig } from '@/components/EmbedConfig'
import { AboutPage } from '@/pages/AboutPage'


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/embed" element={<EmbedConfig />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App