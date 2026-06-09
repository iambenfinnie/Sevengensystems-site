import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { TrainingPrograms } from '@/pages/TrainingPrograms'
import { OperationalAI } from '@/pages/OperationalAI'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { PreviewIndex } from '@/pages/preview/Index'
import { FederalTrust } from '@/pages/preview/FederalTrust'
import { SevenGenerations } from '@/pages/preview/SevenGenerations'
import { OperatorBuilder } from '@/pages/preview/OperatorBuilder'
import { ScotianHeatPumps } from '@/pages/case-studies/ScotianHeatPumps'
import { AIReceptionist } from '@/pages/case-studies/AIReceptionist'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="training-programs" element={<TrainingPrograms />} />
          <Route path="operational-ai" element={<OperationalAI />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="case-studies/scotian-heat-pumps" element={<ScotianHeatPumps />} />
          <Route path="case-studies/ai-receptionist" element={<AIReceptionist />} />
        </Route>
        <Route path="/preview" element={<PreviewIndex />} />
        <Route path="/preview/federal" element={<FederalTrust />} />
        <Route path="/preview/seven-gen" element={<SevenGenerations />} />
        <Route path="/preview/operator" element={<OperatorBuilder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
