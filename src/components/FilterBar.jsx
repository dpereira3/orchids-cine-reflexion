const ESCENARIOS = [
  { value: '', label: 'Todos los escenarios' },
  { value: 'A', label: 'A — Hasta 20 min' },
  { value: 'B', label: 'B — 21 a 60 min' },
  { value: 'C', label: 'C — Largometraje' },
]
const NIVELES = [
  { value: '', label: 'Todos los niveles' },
  { value: 'basico', label: 'Ciclo Básico' },
  { value: 'superior', label: 'Ciclo Superior' },
  { value: 'todos', label: 'Todos los niveles' },
]
const CLASIFICACIONES = [
  { value: '', label: 'Toda clasificación' },
  { value: 'ATP', label: 'ATP' },
  { value: '+13', label: '+13' },
  { value: '+16', label: '+16' },
]

export default function FilterBar({ filters, onChange, total, filtered }) {
  function handleChange(key, value) {
    onChange({ ...filters, [key]: value })
  }

  function clearAll() {
    onChange({ escenario: '', nivel: '', clasificacion: '', query: '' })
  }

  const hasFilters = filters.escenario || filters.nivel || filters.clasificacion || filters.query

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 mb-4 no-print" role="search" aria-label="Filtrar materiales del catálogo">
      {/* Search */}
      <div className="relative mb-3">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="search"
          placeholder="Buscar por título, tema, materia, país, director…"
          value={filters.query}
          onChange={e => handleChange('query', e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#1e3a5f] bg-gray-50"
          aria-label="Buscar materiales"
        />
      </div>

      {/* Dropdowns row */}
      <div className="flex flex-wrap gap-2">
        <select
          value={filters.escenario}
          onChange={e => handleChange('escenario', e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:border-[#1e3a5f] cursor-pointer"
          aria-label="Filtrar por escenario"
        >
          {ESCENARIOS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        <select
          value={filters.nivel}
          onChange={e => handleChange('nivel', e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:border-[#1e3a5f] cursor-pointer"
          aria-label="Filtrar por nivel"
        >
          {NIVELES.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        <select
          value={filters.clasificacion}
          onChange={e => handleChange('clasificacion', e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:border-[#1e3a5f] cursor-pointer"
          aria-label="Filtrar por clasificación"
        >
          {CLASIFICACIONES.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        {hasFilters && (
          <button
            onClick={clearAll}
            className="text-sm text-gray-500 hover:text-red-600 transition-colors px-2 py-1.5 flex items-center gap-1"
            aria-label="Limpiar todos los filtros"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
            Limpiar
          </button>
        )}

        <span className="ml-auto text-xs text-gray-400 self-center" aria-live="polite">
          {filtered === total ? `${total} materiales` : `${filtered} de ${total}`}
        </span>
      </div>
    </div>
  )
}
