import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'

function App() {
  return (
    <BrowserRouter
      basename={(() => {
        const b = import.meta.env.BASE_URL.replace(/\/$/, '')
        return b === '' || b === '/' ? undefined : b
      })()}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
