import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PagePdfButton from './components/PagePdfButton.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import MarketResearch from './pages/sprint1/MarketResearch.jsx'
import BusinessStrategy from './pages/sprint1/BusinessStrategy.jsx'
import ProjectCharter from './pages/sprint1/ProjectCharter.jsx'
import Contributions from './pages/sprint1/Contributions.jsx'
import Sprint2Placeholder from './pages/sprint2/Sprint2Placeholder.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ink-950">
      <Navbar />
      <main className="page flex-1 py-8 sm:py-10">
        <div className="mb-6 flex justify-end">
          <PagePdfButton />
        </div>
        <div data-pdf-content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sprint-1" element={<Navigate to="/sprint-1/market-research" replace />} />
            <Route path="/sprint-1/market-research" element={<MarketResearch />} />
            <Route path="/sprint-1/market-research/phase-1/*" element={<Navigate to="/sprint-1/market-research" replace />} />
            <Route path="/sprint-1/market-research/phase-2/*" element={<Navigate to="/sprint-1/market-research" replace />} />
            <Route path="/sprint-1/business-strategy" element={<BusinessStrategy />} />
            <Route path="/sprint-1/project-charter" element={<ProjectCharter />} />
            <Route path="/sprint-1/contributions" element={<Contributions />} />
            <Route path="/sprint-2" element={<Navigate to="/sprint-2/business-case" replace />} />
            <Route
              path="/sprint-2/business-case"
              element={(
                <Sprint2Placeholder
                  title="Business Case"
                  description="Value analysis and the team's go or no-go recommendation."
                  warning="The team must complete the go or no-go recommendation and its reasoning without AI assistance."
                />
              )}
            />
            <Route
              path="/sprint-2/estimation-appendix"
              element={(
                <Sprint2Placeholder
                  title="Estimation Appendix"
                  description="Estimation methods, resulting ranges, and the reasoning behind them."
                  warning="Individual estimation memo work and reasoning must be completed without AI assistance."
                />
              )}
            />
            <Route
              path="/sprint-2/roi-analysis"
              element={<Sprint2Placeholder title="ROI Analysis" description="The financial return analysis for ShareTab." />}
            />
            <Route
              path="/sprint-2/change-log"
              element={(
                <Sprint2Placeholder
                  title="Change Log"
                  description="Revisions from Sprint 1, why they were made, and what they affected downstream."
                />
              )}
            />
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}
