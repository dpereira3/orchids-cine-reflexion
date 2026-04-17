import { Link, useLocation } from 'react-router-dom'
import catalogo from '../data/catalogo.json'

const totalMateriales = catalogo.length
const fichasListas = catalogo.filter(m => m.fichaGenerada).length

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className="bg-[#1e3a5f] text-white shadow-md no-print">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-3 min-w-0" aria-label="Ir al inicio — Cine y Reflexión">
          {/* Ícono de clapperboard SVG inline */}
          <svg className="w-8 h-8 flex-shrink-0 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="7" width="20" height="15" rx="2"/>
            <polyline points="17 2 12 7 7 2"/>
            <line x1="2" y1="7" x2="22" y2="7"/>
            <line x1="7" y1="2" x2="7" y2="7"/>
            <line x1="12" y1="2" x2="12" y2="7"/>
            <line x1="17" y1="2" x2="17" y2="7"/>
          </svg>
          <div className="min-w-0">
            <div className="text-base font-bold leading-tight tracking-tight text-white truncate">
              Cine y Reflexión
            </div>
            <div className="text-xs text-blue-200 leading-tight truncate hidden sm:block">
              EMATP Laboratorio de Informática · 2026
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Indicador de fichas generadas */}
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              fichasListas === totalMateriales
                ? 'bg-emerald-500/20 text-emerald-200'
                : 'bg-amber-500/20 text-amber-200'
            }`}
            title={`${fichasListas} de ${totalMateriales} materiales tienen ficha pedagógica`}
          >
            {fichasListas}/{totalMateriales} fichas
          </span>

          {!isHome && (
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm text-blue-200 hover:text-white transition-colors"
              aria-label="Volver al catálogo"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              Catálogo
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
