import { Link } from 'react-router-dom'

const ESCENARIO_LABEL = { A: '≤20 min', B: '21–60 min', C: 'Largometraje' }
const ESCENARIO_COLOR = {
  A: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  B: 'bg-blue-100 text-blue-800 border-blue-200',
  C: 'bg-purple-100 text-purple-800 border-purple-200',
}
const NIVEL_LABEL = { todos: 'Todos los niveles', basico: 'Ciclo Básico', superior: 'Ciclo Superior' }
const CLASIF_COLOR = {
  ATP: 'bg-green-100 text-green-800',
  '+13': 'bg-yellow-100 text-yellow-800',
  '+16': 'bg-orange-100 text-orange-800',
}

export default function MaterialCard({ material }) {
  const { id, escenario, titulo, tituloOriginal, director, pais, anio, duracion, tipo,
    clasificacion, temas, materias, nivel, premioFestival, fichaGenerada } = material

  const showOriginal = tituloOriginal && tituloOriginal !== titulo

  return (
    <Link
      to={`/material/${id}`}
      className="block bg-white rounded-xl border border-gray-200 hover:border-[#1e3a5f] hover:shadow-md transition-all duration-150 p-4 group"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full border ${ESCENARIO_COLOR[escenario]}`}>
          <span className="font-bold">{id}</span>
          <span className="font-normal opacity-70">· {ESCENARIO_LABEL[escenario]}</span>
        </span>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {fichaGenerada && (
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium">
              Ficha lista
            </span>
          )}
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CLASIF_COLOR[clasificacion] || 'bg-gray-100 text-gray-700'}`}>
            {clasificacion}
          </span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-[15px] font-bold text-[#1e3a5f] group-hover:text-blue-700 leading-snug mb-0.5 line-clamp-2">
        {titulo}
      </h2>
      {showOriginal && (
        <p className="text-xs text-gray-400 italic mb-1 truncate">{tituloOriginal}</p>
      )}

      {/* Meta row */}
      <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-gray-500 mb-2">
        {director && <span>{director}</span>}
        <span>{pais}{anio ? ` · ${anio}` : ''}</span>
        <span>{duracion} min</span>
      </div>

      {/* Tipo */}
      <p className="text-xs text-gray-400 mb-2 truncate">{tipo}</p>

      {/* Premio */}
      {premioFestival && (
        <div className="flex items-center gap-1 mb-2">
          <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span className="text-xs text-amber-700 line-clamp-1">{premioFestival}</span>
        </div>
      )}

      {/* Temas */}
      <div className="flex flex-wrap gap-1 mb-2">
        {temas.slice(0, 4).map(t => (
          <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{t}</span>
        ))}
        {temas.length > 4 && (
          <span className="text-xs text-gray-400 px-1 py-0.5">+{temas.length - 4}</span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <span className="text-xs text-gray-400">{NIVEL_LABEL[nivel]}</span>
        <span className="text-xs text-[#1e3a5f] font-medium group-hover:underline">Ver ficha →</span>
      </div>
    </Link>
  )
}
