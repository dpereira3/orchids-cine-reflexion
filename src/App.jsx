import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Catalogo from './pages/Catalogo'
import Detalle from './pages/Detalle'

function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center">
      <p className="text-6xl font-bold text-gray-200 mb-4">404</p>
      <p className="text-gray-500 mb-2">Página no encontrada.</p>
      <p className="text-sm text-gray-400 mb-6">
        El material que buscás no existe o fue movido.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-[#16304f] transition-colors"
      >
        ← Volver al catálogo
      </Link>
    </main>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-[#f8f9fb]">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/material/:id" element={<Detalle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer className="no-print border-t border-gray-200 bg-white mt-8 py-4 text-center text-xs text-gray-400">
          Proyecto Cine y Reflexión · EMATP Laboratorio de Informática · La Plata, Buenos Aires · 2026
        </footer>
      </div>
    </HashRouter>
  )
}
