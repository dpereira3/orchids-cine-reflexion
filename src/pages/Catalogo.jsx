import { useState, useMemo } from 'react'
import catalogo from '../data/catalogo.json'
import MaterialCard from '../components/MaterialCard'
import FilterBar from '../components/FilterBar'

const ESCENARIO_INFO = {
  A: { label: 'Escenario A', desc: '1 módulo faltante · hasta 20 min' },
  B: { label: 'Escenario B', desc: '2 módulos consecutivos · 21 a 60 min' },
  C: { label: 'Escenario C', desc: 'Acto escolar o jornada especial · largometraje' },
}

function normalize(str) {
  return str?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') ?? ''
}

export default function Catalogo() {
  const [filters, setFilters] = useState({ escenario: '', nivel: '', clasificacion: '', query: '' })

  const filtered = useMemo(() => {
    const q = normalize(filters.query)
    return catalogo.filter(m => {
      if (filters.escenario && m.escenario !== filters.escenario) return false
      if (filters.clasificacion && m.clasificacion !== filters.clasificacion) return false
      if (filters.nivel) {
        if (filters.nivel === 'basico' && !['basico', 'todos'].includes(m.nivel)) return false
        if (filters.nivel === 'superior' && !['superior', 'todos'].includes(m.nivel)) return false
        if (filters.nivel === 'todos' && m.nivel !== 'todos') return false
      }
      if (q) {
        const haystack = normalize([
          m.titulo, m.tituloOriginal, m.director, m.pais,
          ...m.temas, ...m.materias, m.sinopsis
        ].join(' '))
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [filters])

  const groupByEscenario = useMemo(() => {
    const grouped = { A: [], B: [], C: [] }
    filtered.forEach(m => grouped[m.escenario]?.push(m))
    return grouped
  }, [filtered])

  const grouping = filters.escenario || filters.query || filters.nivel || filters.clasificacion

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span /> PROYECTO CINE Y REFLEXIÓN · 2026</div>
          <h1>Catálogo<br /><em>audiovisual.</em></h1>
          <p>
            Películas, cortometrajes y documentales seleccionados para trabajar temas transversales
            en horas libres. Cada material incluye ficha pedagógica con actividades para
            Ciclo Básico y Ciclo Superior.
          </p>
          <p className="hero-institution">
            Un recurso del Laboratorio de Informática de la E.E.S. N.º 2 “Perito Francisco P. Moreno” · Berisso.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="hero-cta"
              onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar catálogo
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7" /><path d="M8 7h9v9" />
              </svg>
            </button>
            <span className="ficha-counter">{catalogo.length} materiales · 3 escenarios</span>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div /><div /><div /><span>02</span>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="intro-section">
        <span className="section-kicker">UN ESPACIO PARA COMPARTIR</span>
        <p>
          Este catálogo reúne materiales audiovisuales con su ficha pedagógica, pensados para
          escenarios reales de la escuela: un módulo libre, dos módulos seguidos o un acto escolar.
        </p>
        <p>
          Elegí un escenario según el tiempo disponible y encontrá actividades listas para
          imprimir antes de la proyección.
        </p>
      </section>

      {/* ── CATÁLOGO ── */}
      <section className="catalog-section" id="catalogo">
        <div className="section-heading">
          <div>
            <span className="section-kicker">CATÁLOGO DIGITAL</span>
            <h2>
              Todo lo que necesitás,<br /><em>en un solo lugar.</em>
            </h2>
          </div>
          <p className="section-note">
            Materiales seleccionados para<br />aprender, reflexionar y compartir.
          </p>
        </div>

        <FilterBar
          filters={filters}
          onChange={setFilters}
          total={catalogo.length}
          filtered={filtered.length}
        />

        {filtered.length === 0 ? (
          <div className="empty-state" style={{ marginTop: 40 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <h3>Sin resultados para esa búsqueda</h3>
            <p>Probá con otro término o limpiá los filtros.</p>
            <button className="retry-button" onClick={() => setFilters({ escenario: '', nivel: '', clasificacion: '', query: '' })}>
              Limpiar filtros
            </button>
          </div>
        ) : grouping ? (
          <>
            <div className="catalog-meta" style={{ marginBottom: 24 }}>
              <span>{filtered.length} de {catalogo.length} materiales</span>
            </div>
            <div className="resource-grid">
              {filtered.map(m => <MaterialCard key={m.id} material={m} />)}
            </div>
          </>
        ) : (
          ['A', 'B', 'C'].map((esc, i) => groupByEscenario[esc].length > 0 && (
            <section key={esc} className="escenario-section">
              <div className="subsection-title">
                <span>0{i + 1}</span>
                <h2>{ESCENARIO_INFO[esc].label}</h2>
                <small style={{ color: 'var(--muted)', fontSize: 10, marginLeft: 'auto' }}>
                  {ESCENARIO_INFO[esc].desc} · {groupByEscenario[esc].length} materiales
                </small>
              </div>
              <div className="resource-grid">
                {groupByEscenario[esc].map(m => <MaterialCard key={m.id} material={m} />)}
              </div>
            </section>
          ))
        )}
      </section>
    </>
  )
}
