import { Link } from 'react-router-dom'

const ESCENARIO_LABEL = { A: '≤20 min', B: '21–60 min', C: 'Largometraje' }

const ARROW_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
)

const FILM_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="15" rx="2" />
    <polyline points="17 2 12 7 7 2" />
    <line x1="2" y1="7" x2="22" y2="7" />
    <line x1="7" y1="2" x2="7" y2="7" />
    <line x1="12" y1="2" x2="12" y2="7" />
    <line x1="17" y1="2" x2="17" y2="7" />
  </svg>
)

export default function MaterialCard({ material }) {
  const { id, escenario, titulo, tituloOriginal, director, pais, anio, duracion, tipo,
    clasificacion, temas, nivel, premioFestival, fichaGenerada } = material

  const showOriginal = tituloOriginal && tituloOriginal !== titulo
  const sinopsis = material.sinopsis ?? ''
  const tipoCorto = tipo?.split('—')[0]?.trim() || 'Material'

  return (
    <Link
      to={`/material/${id}`}
      className="resource-card"
      aria-label={`Ver ficha: ${titulo}${showOriginal ? ` (${tituloOriginal})` : ''}`}
    >
      {/* Bloque visual superior (estilo lab) */}
      <div className="resource-media">
        <div className="resource-media-fallback">{FILM_ICON}</div>
        <div className="resource-media-overlay" />
        <span className="resource-type">{tipoCorto}</span>
        {fichaGenerada && <span className="badge-new">Ficha lista</span>}
      </div>

      <div className="resource-card-body">
        <div className="resource-card-top">
          <span className="category-label">
            {id} · {ESCENARIO_LABEL[escenario]} · {clasificacion}
          </span>
          <span className="resource-id">{id}</span>
        </div>

        <h3>{titulo}</h3>
        {showOriginal && <p className="resource-original">{tituloOriginal}</p>}

        <p className="resource-meta">
          {director ? `${director} · ` : ''}{pais}{anio ? ` ${anio}` : ''} · {duracion} min
        </p>

        {premioFestival && (
          <p className="resource-meta" style={{ color: 'var(--mint)', marginTop: 6 }}>
            ★ {premioFestival}
          </p>
        )}

        <p className="resource-sinopsis">{sinopsis}</p>

        <div className="tag-row">
          {temas.slice(0, 3).map(t => <span key={t}>#{t.toLowerCase().replace(/\s+/g, '-')}</span>)}
          {temas.length > 3 && <span>+{temas.length - 3}</span>}
        </div>

        <div className="resource-link">
          <span className="clasp">
            {fichaGenerada ? 'Ficha lista' : 'Ver ficha'} <ArrowIcon />
          </span>
          <span className="escenario-chip">{ESCENARIO_LABEL[escenario]}</span>
        </div>

        {/* Nivel como texto invisible para lectores, visible en el detalle */}
        <span className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          {nivel === 'basico' ? 'Ciclo Básico' : nivel === 'superior' ? 'Ciclo Superior' : 'Todos los niveles'}
        </span>
      </div>
    </Link>
  )
}

function ArrowIcon() {
  return ARROW_ICON
}
