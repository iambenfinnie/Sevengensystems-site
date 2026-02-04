import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { TrainingPrograms } from '@/pages/TrainingPrograms'
import { OperationalAI } from '@/pages/OperationalAI'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
