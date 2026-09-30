import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Catalogo from './pages/Catalogo'
import Detalle from './pages/Detalle'
import { LogoEm2Completo } from './components/LogoEm2'

function NotFound() {
  return (
    <main className="catalog-section">
      <div className="empty-state">
        <h1 style={{ fontSize: 64, letterSpacing: '-.06em', color: 'var(--line)', margin: 0 }}>404</h1>
        <h3>Página no encontrada.</h3>
        <p>El material que buscás no existe o fue movido.</p>
        <Link to="/" className="retry-button" style={{ textDecoration: 'none' }}>Volver al catálogo</Link>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="site-shell">
        <Header />
        <div className="site-main">
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/material/:id" element={<Detalle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer className="site-footer no-print">
          <div className="footer-inner">
            <LogoEm2Completo className="site-footer-logo" />
            <div className="footer-copy">
              <strong>CINE Y REFLEXIÓN</strong>
              <p>Laboratorio de Informática — E.E.S. N.º 2 “Perito Francisco P. Moreno”</p>
              <p>Berisso · Buenos Aires</p>
              <span>Catálogo · Fichas pedagógicas · Escenarios</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Proyecto pedagógico del Laboratorio</span>
            <span>© 2026</span>
          </div>
        </footer>
      </div>
    </HashRouter>
  )
}
