import { Link, useLocation } from 'react-router-dom'
import catalogo from '../data/catalogo.json'
import ThemeToggle from './ThemeToggle'
import { LogoEm2Compacto } from './LogoEm2'

const totalMateriales = catalogo.length
const fichasListas = catalogo.filter(m => m.fichaGenerada).length

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="site-header no-print">
      <Link to="/" className="brand" aria-label="Ir al inicio — Cine y Reflexión">
        {/* Marca oficial de la escuela */}
        <LogoEm2Compacto className="brand-logo" />
        <span>
          <strong>Cine y Reflexión</strong>
          <span className="brand-sub" style={{ display: 'block' }}>
            Laboratorio de Informática · E.E.S. N.º 2
          </span>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Navegación principal">
        <span className="ficha-counter" title={`${fichasListas} de ${totalMateriales} materiales tienen ficha pedagógica`}>
          {fichasListas}/{totalMateriales} fichas
        </span>
        {!isHome && (
          <Link to="/" className="nav-link">← Catálogo</Link>
        )}
        <ThemeToggle />
      </nav>
    </header>
  )
}
