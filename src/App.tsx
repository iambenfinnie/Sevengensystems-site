import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { Grow } from '@/pages/Grow'
import { Automate } from '@/pages/Automate'
import { Learn } from '@/pages/Learn'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="grow" element={<Grow />} />
          <Route path="automate" element={<Automate />} />
          <Route path="learn" element={<Learn />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
