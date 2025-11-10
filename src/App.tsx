import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { HomePage } from '@pages/HomePage'
import { EmbedConfigPage } from '@pages/EmbedConfigPage'
import { EmbedPage } from '@pages/EmbedPage'
import { AboutPage } from '@pages/AboutPage'


function AppContent() {
  const location = useLocation()
  const isEmbed = location.pathname === '/embed'

  if (isEmbed) {
    return <EmbedPage />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/embed-config" element={<EmbedConfigPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/embed" element={<EmbedPage />} />
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  )
}

export default App