import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import catalogo from '../data/catalogo.json'

const NIVEL_LABEL = { todos: 'Todos los niveles', basico: 'Ciclo Básico (1°–3°)', superior: 'Ciclo Superior (4°–6°)' }
const ESCENARIO_DESC = { A: '1 módulo faltante · hasta 20 min', B: '2 módulos consecutivos · 21–60 min', C: 'Acto escolar · Largometraje' }
const CLASIF_COLOR = { ATP: 'bg-green-100 text-green-800', '+13': 'bg-yellow-100 text-yellow-800', '+16': 'bg-orange-100 text-orange-800' }

// Carga dinámica de la ficha pedagógica
async function loadFicha(id) {
  try {
    const mod = await import(`../data/fichas/${id}.json`)
    return mod.default
  } catch {
    return null
  }
}

export default function Detalle() {
  const { id } = useParams()
  const [ficha, setFicha] = useState(undefined) // undefined = cargando, null = no existe

  const material = catalogo.find(m => m.id === id)

  useEffect(() => {
    setFicha(undefined)
    loadFicha(id).then(setFicha)
  }, [id])

  if (!material) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <p className="text-6xl font-bold text-gray-200 mb-4">404</p>
        <p className="text-gray-500 mb-4">Material no encontrado.</p>
        <Link to="/" className="text-[#1e3a5f] hover:underline">← Volver al catálogo</Link>
      </div>
    )
  }

  const {
    titulo, tituloOriginal, director, pais, anio, duracion, tipo,
    clasificacion, disponible, enlace, premioFestival,
    temas, materias, nivel, sinopsis, escenario, contenidoSensible
  } = material

  const showOriginal = tituloOriginal && tituloOriginal !== titulo

  return (
    <main className="max-w-3xl mx-auto px-4 py-6">

      {/* Volver */}
      <Link to="/" className="no-print inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1e3a5f] mb-4 transition-colors" aria-label="Volver al catálogo">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Volver al catálogo
      </Link>

      {/* ══════════════════════════════════════
          FICHA COMPLETA (zona imprimible)
         ══════════════════════════════════════ */}
      <div id="ficha-print">

        {/* Encabezado solo para impresión */}
        <div className="hidden print:block text-center mb-4 border-b pb-3">
          <p className="text-base font-bold tracking-tight">FICHA PEDAGÓGICA — Proyecto Cine y Reflexión</p>
          <p className="text-sm text-gray-500">EMATP Laboratorio de Informática · La Plata, Buenos Aires · 2026</p>
        </div>

        {/* ── DATOS DEL MATERIAL ── */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-3">

          {/* Header azul */}
          <div className="bg-[#1e3a5f] px-5 py-4 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-xl font-bold leading-tight">{titulo}</h1>
                {showOriginal && <p className="text-blue-200 text-sm italic mt-0.5">{tituloOriginal}</p>}
              </div>
              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CLASIF_COLOR[clasificacion] || 'bg-gray-100 text-gray-700'}`}>{clasificacion}</span>
                <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-mono">{id}</span>
              </div>
            </div>
          </div>

          {/* Grid de datos */}
          <div className="px-5 py-4">
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm mb-4">
              {director && <DataRow label="Director/a" value={director} />}
              <DataRow label="País" value={pais} />
              {anio && <DataRow label="Año" value={anio} />}
              <DataRow label="Duración" value={`${duracion} min`} />}
              <DataRow label="Género" value={tipo} />
              <DataRow label="Clasificación" value={clasificacion} />
              <DataRow label="Escenario" value={`${escenario} — ${ESCENARIO_DESC[escenario]}`} />
              <DataRow label="Nivel sugerido" value={NIVEL_LABEL[nivel]} />
              <DataRow label="Disponible en" value={disponible} />
            </dl>

            {/* Premio */}
            {premioFestival && (
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm text-amber-800">{premioFestival}</span>
              </div>
            )}

            {/* Enlace YouTube */}
            {enlace && (
              <a href={enlace} target="_blank" rel="noopener noreferrer"
                className="no-print inline-flex items-center gap-2 text-sm text-[#1e3a5f] hover:underline font-medium mb-4"
                aria-label={`Ver ${titulo} en YouTube`}
              >
                <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Ver en YouTube / buscar material
              </a>
            )}

            {/* Ejes y materias */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Ejes transversales</p>
                <div className="flex flex-wrap gap-1.5">
                  {temas.map(t => (
                    <span key={t} className="text-xs bg-blue-50 text-blue-800 border border-blue-100 px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Vinculación curricular</p>
                <div className="flex flex-wrap gap-1.5">
                  {materias.map(m => (
                    <span key={m} className="text-xs bg-purple-50 text-purple-700 border border-purple-100 px-2 py-0.5 rounded-full">{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SINOPSIS ── */}
        <FichaSection headerClass="bg-[#1e3a5f]" title="SINOPSIS">
          <p className="text-sm text-gray-700 leading-relaxed">{sinopsis}</p>
          {contenidoSensible && (
            <div className="mt-3 flex items-start gap-2 bg-orange-50 border border-orange-200 rounded-lg p-3">
              <svg className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <p className="text-xs text-orange-800"><strong>Contenido sensible:</strong> {contenidoSensible}</p>
            </div>
          )}
        </FichaSection>

        {/* ── Secciones pedagógicas ── */}
        {ficha === undefined ? (
          <div className="text-center py-8 text-gray-400 text-sm" aria-live="polite">Cargando ficha pedagógica…</div>
        ) : ficha === null ? (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div>
              <p className="font-semibold">Ficha pedagógica en elaboración</p>
              <p className="text-amber-700 mt-0.5">Las actividades para este material aún no han sido cargadas.</p>
            </div>
          </div>
        ) : (
          <>
            {/* ANTES DE VER */}
            <FichaSection headerClass="bg-[#1e3a5f]" title="ANTES DE VER — Activación de saberes previos">
              {ficha.antesDeVer.intro && (
                <p className="text-xs text-gray-500 italic mb-3">{ficha.antesDeVer.intro}</p>
              )}
              <PreguntasList preguntas={ficha.antesDeVer.preguntas} />
              {ficha.antesDeVer.consignaObservacion && (
                <div className="mt-3 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2.5">
                  <p className="text-xs font-semibold text-blue-800 mb-1">Consigna de observación durante la proyección:</p>
                  <p className="text-sm text-blue-900">{ficha.antesDeVer.consignaObservacion}</p>
                </div>
              )}
            </FichaSection>

            {/* CICLO BÁSICO */}
            <FichaSection headerClass="bg-[#155e3e]" title="DESPUÉS — GUÍA DE TRABAJO: CICLO BÁSICO (13 a 15 años)">
              {ficha.despuesBasico.intro && (
                <p className="text-xs text-gray-500 italic mb-3">{ficha.despuesBasico.intro}</p>
              )}
              <PreguntasList preguntas={ficha.despuesBasico.preguntas} />
            </FichaSection>

            {/* CICLO SUPERIOR */}
            <FichaSection headerClass="bg-[#5b21b6]" title="DESPUÉS — GUÍA DE TRABAJO: CICLO SUPERIOR (16 a 18 años)">
              {ficha.despuesSuperior.intro && (
                <p className="text-xs text-gray-500 italic mb-3">{ficha.despuesSuperior.intro}</p>
              )}
              <PreguntasList preguntas={ficha.despuesSuperior.preguntas} />
            </FichaSection>

            {/* NOTAS DOCENTE */}
            <FichaSection headerClass="bg-[#92400e]" title="NOTAS PARA EL DOCENTE O PRECEPTOR">
              <div className="space-y-3 text-sm text-gray-700">
                {ficha.notasDocente.contenidoSensible && (
                  <NotaRow label="Contenido sensible" value={ficha.notasDocente.contenidoSensible} />
                )}
                {ficha.notasDocente.sugerenciaUsoParcial && (
                  <NotaRow label="Sugerencia de uso parcial" value={ficha.notasDocente.sugerenciaUsoParcial} />
                )}
                {ficha.notasDocente.actividadesComplementarias?.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Actividades complementarias</p>
                    <ul className="list-disc list-inside space-y-1">
                      {ficha.notasDocente.actividadesComplementarias.map((a, i) => (
                        <li key={i} className="text-sm text-gray-700">{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {ficha.notasDocente.enlacesAdicionales?.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Enlaces adicionales</p>
                    <div className="flex flex-col gap-1.5">
                      {ficha.notasDocente.enlacesAdicionales.map((e, i) => (
                        <a key={i} href={e.url} target="_blank" rel="noopener noreferrer"
                          className="no-print inline-flex items-center gap-2 text-sm text-[#1e3a5f] hover:underline"
                        >
                          <svg className="w-3.5 h-3.5 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          {e.label}
                          <span className="print:inline hidden text-xs text-gray-400">{e.url}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </FichaSection>
          </>
        )}

        {/* Pie de página — solo en impresión */}
        <div className="hidden print:block text-center mt-8 pt-4 border-t text-xs text-gray-400">
          Proyecto Cine y Reflexión · EMATP Laboratorio de Informática · La Plata, Buenos Aires · 2026
        </div>

      </div>
      {/* ══════ FIN FICHA ══════ */}

      {/* Botones de acción */}
      <div className="no-print mt-6 flex flex-wrap gap-3 items-center">
        {ficha && (
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-[#1e3a5f] text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-[#16304f] transition-colors shadow-sm"
            aria-label="Imprimir o descargar como PDF la ficha pedagógica"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Imprimir / Descargar PDF
          </button>
        )}
        <Link to="/" className="flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors" aria-label="Volver al catálogo">
          ← Volver al catálogo
        </Link>
      </div>

    </main>
  )
}

/* ─── Componentes auxiliares ─── */

function DataRow({ label, value }) {
  return (
    <div>
      <dt className="text-xs text-gray-400 font-medium">{label}</dt>
      <dd className="text-sm text-gray-800 font-semibold">{value ?? '—'}</dd>
    </div>
  )
}

function FichaSection({ title, headerClass, children }) {
  return (
    <div className="ficha-section border border-gray-200 rounded-lg overflow-hidden mb-3">
      <div className={`ficha-section-header ${headerClass} text-white text-xs font-bold uppercase tracking-wider px-4 py-2`}>
        {title}
      </div>
      <div className="px-4 py-3 bg-white">
        {children}
      </div>
    </div>
  )
}

function PreguntasList({ preguntas }) {
  return (
    <ol className="space-y-2">
      {preguntas.map((p, i) => (
        <li key={i} className="flex gap-2.5 text-sm text-gray-700">
          <span className="flex-shrink-0 w-5 h-5 bg-gray-100 text-gray-500 rounded-full text-xs font-bold flex items-center justify-center mt-0.5">
            {i + 1}
          </span>
          <span className="leading-relaxed">{p}</span>
        </li>
      ))}
    </ol>
  )
}

function NotaRow({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-sm text-gray-700">{value}</p>
    </div>
  )
}
