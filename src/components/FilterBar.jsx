const ESCENARIOS = [
  { value: '', label: 'Todos' },
  { value: 'A', label: 'A · ≤20 min' },
  { value: 'B', label: 'B · 21–60 min' },
  { value: 'C', label: 'C · Largometraje' },
]

const NIVELES = [
  { value: '', label: 'Todos' },
  { value: 'basico', label: 'C. Básico' },
  { value: 'superior', label: 'C. Superior' },
  { value: 'todos', label: 'Mixto' },
]

const CLASIFICACIONES = [
  { value: '', label: 'Todas' },
  { value: 'ATP', label: 'ATP' },
  { value: '+13', label: '+13' },
  { value: '+16', label: '+16' },
]

function FilterGroup({ icon, ariaLabel, options, active, onChange }) {
  return (
    <div className="filter-group" aria-label={ariaLabel}>
      {icon}
      {options.map(o => (
        <button
          key={o.value}
          className={active === o.value ? 'active' : ''}
          aria-pressed={active === o.value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

export default function FilterBar({ filters, onChange, total, filtered }) {
  function handleChange(key, value) {
    onChange({ ...filters, [key]: value })
  }

  function clearAll() {
    onChange({ escenario: '', nivel: '', clasificacion: '', query: '' })
  }

  const hasFilters = filters.escenario || filters.nivel || filters.clasificacion || filters.query

  return (
    <div className="filters-bar no-print" role="search" aria-label="Filtrar materiales del catálogo">
      <label className="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="search"
          placeholder="Buscar por título, tema, materia, país, director…"
          value={filters.query}
          onChange={e => handleChange('query', e.target.value)}
          aria-label="Buscar materiales"
        />
      </label>

      <FilterGroup
        ariaLabel="Filtrar por escenario"
        options={ESCENARIOS}
        active={filters.escenario}
        onChange={v => handleChange('escenario', v)}
      />

      <FilterGroup
        ariaLabel="Filtrar por nivel"
        options={NIVELES}
        active={filters.nivel}
        onChange={v => handleChange('nivel', v)}
      />

      <FilterGroup
        ariaLabel="Filtrar por clasificación"
        options={CLASIFICACIONES}
        active={filters.clasificacion}
        onChange={v => handleChange('clasificacion', v)}
      />

      <span className="catalog-meta" style={{ margin: 0 }}>
        <span aria-live="polite">
          {filtered === total ? `${total} materiales` : `${filtered} de ${total}`}
        </span>
        {hasFilters && (
          <button className="retry-button" onClick={clearAll} aria-label="Limpiar todos los filtros">
            Limpiar
          </button>
        )}
      </span>
    </div>
  )
}
