import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Sprint1 from './pages/Sprint1.jsx'
import MarketResearch from './pages/sprint1/MarketResearch.jsx'
import BusinessStrategy from './pages/sprint1/BusinessStrategy.jsx'
import ProjectCharter from './pages/sprint1/ProjectCharter.jsx'
import Contributions from './pages/sprint1/Contributions.jsx'
import Sprint2 from './pages/Sprint2.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950">
      <Navbar />
      <main className="page flex-1 py-8 sm:py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sprint-1" element={<Sprint1 />} />
          <Route path="/sprint-1/market-research" element={<MarketResearch />} />
          <Route path="/sprint-1/business-strategy" element={<BusinessStrategy />} />
          <Route path="/sprint-1/project-charter" element={<ProjectCharter />} />
          <Route path="/sprint-1/contributions" element={<Contributions />} />
          <Route path="/sprint-2" element={<Sprint2 />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
