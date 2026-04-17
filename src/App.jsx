import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Catalogo from './pages/Catalogo'
import Detalle from './pages/Detalle'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#f8f9fb]">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/material/:id" element={<Detalle />} />
          </Routes>
        </div>
        <footer className="no-print border-t border-gray-200 bg-white mt-8 py-4 text-center text-xs text-gray-400">
          Proyecto Cine y Reflexión · EMATP Laboratorio de Informática · La Plata, Buenos Aires · 2026
        </footer>
      </div>
    </BrowserRouter>
  )
}
