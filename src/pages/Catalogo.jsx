import { useState, useMemo } from 'react'
import catalogo from '../data/catalogo.json'
import MaterialCard from '../components/MaterialCard'
import FilterBar from '../components/FilterBar'

const ESCENARIO_INFO = {
  A: { label: 'Escenario A', desc: '1 módulo faltante · hasta 20 min', color: 'border-emerald-400' },
  B: { label: 'Escenario B', desc: '2 módulos consecutivos · 21 a 60 min', color: 'border-blue-400' },
  C: { label: 'Escenario C', desc: 'Acto escolar o jornada especial · largometraje', color: 'border-purple-400' },
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
    <main className="max-w-5xl mx-auto px-4 py-6">
      {/* Hero banner */}
      <div className="bg-[#1e3a5f] text-white rounded-2xl px-5 py-6 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-1">Catálogo de Materiales Audiovisuales</h1>
        <p className="text-blue-200 text-sm leading-relaxed max-w-2xl">
          Películas, cortometrajes y documentales seleccionados para trabajar temas transversales
          en horas libres. Cada material incluye ficha pedagógica con actividades para Ciclo Básico
          y Ciclo Superior.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          {Object.entries(ESCENARIO_INFO).map(([k, v]) => (
            <button
              key={k}
              onClick={() => setFilters(f => ({ ...f, escenario: f.escenario === k ? '' : k }))}
              className={`flex items-start gap-2 bg-white/10 hover:bg-white/20 border-l-4 ${v.color} rounded-lg px-3 py-2 text-left transition-colors ${filters.escenario === k ? 'bg-white/20 ring-1 ring-white/40' : ''}`}
            >
              <div>
                <div className="text-xs font-bold">{v.label}</div>
                <div className="text-xs text-blue-200 leading-tight">{v.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <FilterBar
        filters={filters}
        onChange={setFilters}
        total={catalogo.length}
        filtered={filtered.length}
      />

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-3 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <p className="font-medium">Sin resultados para esa búsqueda</p>
          <button onClick={() => setFilters({ escenario: '', nivel: '', clasificacion: '', query: '' })} className="text-sm text-[#1e3a5f] mt-2 hover:underline">
            Limpiar filtros
          </button>
        </div>
      ) : grouping ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(m => <MaterialCard key={m.id} material={m} />)}
        </div>
      ) : (
        ['A', 'B', 'C'].map(esc => groupByEscenario[esc].length > 0 && (
          <section key={esc} className="mb-8">
            <div className={`flex items-center gap-3 mb-3 pb-2 border-b-2 ${esc === 'A' ? 'border-emerald-400' : esc === 'B' ? 'border-blue-400' : 'border-purple-400'}`}>
              <h2 className="text-base font-bold text-[#1e3a5f]">{ESCENARIO_INFO[esc].label}</h2>
              <span className="text-sm text-gray-500">{ESCENARIO_INFO[esc].desc}</span>
              <span className="ml-auto text-xs text-gray-400">{groupByEscenario[esc].length} materiales</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupByEscenario[esc].map(m => <MaterialCard key={m.id} material={m} />)}
            </div>
          </section>
        ))
      )}
    </main>
  )
}
