import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import catalogo from '../data/catalogo.json'

const NIVEL_LABEL = { todos: 'Todos los niveles', basico: 'Ciclo Básico (1°–3°)', superior: 'Ciclo Superior (4°–6°)' }
const ESCENARIO_DESC = { A: '1 módulo faltante · hasta 20 min', B: '2 módulos consecutivos · 21–60 min', C: 'Acto escolar · Largometraje' }

const YOUTUBE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const ARROW_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
  </svg>
)

const PRINT_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
)

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
      <main className="catalog-section">
        <div className="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <h3>404 — Material no encontrado.</h3>
          <Link to="/" className="retry-button" style={{ textDecoration: 'none' }}>Volver al catálogo</Link>
        </div>
      </main>
    )
  }

  const {
    titulo, tituloOriginal, director, pais, anio, duracion, tipo,
    clasificacion, disponible, enlace, premioFestival,
    temas, materias, nivel, sinopsis, escenario, contenidoSensible
  } = material

  const showOriginal = tituloOriginal && tituloOriginal !== titulo

  return (
    <main className="catalog-section" style={{ padding: '40px max(32px, calc((100vw - 1240px) / 2)) 80px' }}>
      <div className="max-w-3xl" style={{ maxWidth: 820, margin: '0 auto' }}>

        {/* Volver */}
        <Link to="/" className="hero-cta no-print" style={{ marginTop: 0, marginBottom: 28 }} aria-label="Volver al catálogo">
          {ARROW_ICON}
          Volver al catálogo
        </Link>

        {/* ══════════════════════════════════════
            FICHA COMPLETA (zona imprimible)
           ══════════════════════════════════════ */}
        <div id="ficha-print">

          {/* Encabezado solo para impresión */}
          <div className="print-only" style={{ textAlign: 'center', marginBottom: 12, borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
            <strong style={{ display: 'block', fontSize: '12pt', fontFamily: 'Arial, sans-serif' }}>FICHA PEDAGÓGICA — Proyecto Cine y Reflexión</strong>
            <span style={{ fontSize: '9pt' }}>Laboratorio de Informática · E.E.S. N.º 2 Berisso · 2026</span>
          </div>

          {/* ── DATOS DEL MATERIAL ── */}
          <div className="ficha-section">

            {/* Título */}
            <div style={{ padding: '20px 16px 16px', borderBottom: '1px solid var(--line)' }}>
              <span className="category-label">{id} · Escenario {escenario} — {ESCENARIO_DESC[escenario]}</span>
              <h1 style={{
                fontFamily: "'Sora', 'Inter', Arial, sans-serif",
                fontSize: 'clamp(26px, 4vw, 38px)',
                fontWeight: 600,
                letterSpacing: '-.05em',
                lineHeight: 1.05,
                margin: '10px 0 4px',
              }}>
                {titulo}
              </h1>
              {showOriginal && (
                <p style={{ color: 'var(--muted)', fontStyle: 'italic', fontSize: 13, margin: 0 }}>{tituloOriginal}</p>
              )}
            </div>

            {/* Grid de datos */}
            <div className="ficha-section-body">
              <dl className="ficha-dl">
                <DataRow label="Director/a" value={director} />
                <DataRow label="País" value={pais} />
                {anio && <DataRow label="Año" value={anio} />}
                <DataRow label="Duración" value={`${duracion} min`} />
                <DataRow label="Género" value={tipo} />
                <DataRow label="Clasificación" value={clasificacion} />
                <DataRow label="Nivel sugerido" value={NIVEL_LABEL[nivel]} />
                <DataRow label="Disponible en" value={disponible} />
              </dl>

              {/* Premio */}
              {premioFestival && (
                <div className="ficha-premio" style={{ marginTop: 16 }}>
                  <strong>★ Premio:</strong> {premioFestival}
                </div>
              )}

              {/* Enlace YouTube */}
              {enlace && (
                <a href={enlace} target="_blank" rel="noopener noreferrer"
                  className="hero-cta no-print" style={{ marginTop: 16, fontSize: 10 }}
                  aria-label={`Ver ${titulo} en YouTube`}
                >
                  {YOUTUBE_ICON}
                  Ver en YouTube / buscar material
                </a>
              )}

              {/* Ejes y materias */}
              <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 18 }}>
                <div>
                  <p style={{ color: 'var(--mint)', fontSize: 9, letterSpacing: '.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>Ejes transversales</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {temas.map(t => <span key={t} className="ficha-chip mint">{t}</span>)}
                  </div>
                </div>
                <div>
                  <p style={{ color: 'var(--muted)', fontSize: 9, letterSpacing: '.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>Vinculación curricular</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {materias.map(m => <span key={m} className="ficha-chip">{m}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SINOPSIS ── */}
          <FichaSection title="Sinopsis">
            <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--cream)', margin: 0 }}>{sinopsis}</p>
            {contenidoSensible && (
              <div className="ficha-aviso" style={{ marginTop: 12 }}>
                <strong>Contenido sensible:</strong> {contenidoSensible}
              </div>
            )}
          </FichaSection>

          {/* ── Secciones pedagógicas ── */}
          {ficha === undefined ? (
            <div className="empty-state" aria-live="polite" style={{ minHeight: 120 }}>
              <span className="loading-dot" />
              Cargando ficha pedagógica…
            </div>
          ) : ficha === null ? (
            <div className="ficha-aviso" style={{ borderColor: 'var(--color-accent-secondary)' }}>
              <strong>Ficha pedagógica en elaboración.</strong> Las actividades para este material aún no han sido cargadas.
            </div>
          ) : (
            <>
              {/* ANTES DE VER */}
              <FichaSection title="Antes de ver — Activación de saberes previos">
                {ficha.antesDeVer.intro && (
                  <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', margin: '0 0 12px' }}>{ficha.antesDeVer.intro}</p>
                )}
                <PreguntasList preguntas={ficha.antesDeVer.preguntas} />
                {ficha.antesDeVer.consignaObservacion && (
                  <div className="ficha-premio" style={{ marginTop: 12 }}>
                    <strong>Consigna de observación durante la proyección:</strong> {ficha.antesDeVer.consignaObservacion}
                  </div>
                )}
              </FichaSection>

              {/* CICLO BÁSICO */}
              <FichaSection title="Después — Guía de trabajo: Ciclo Básico (13 a 15 años)">
                {ficha.despuesBasico.intro && (
                  <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', margin: '0 0 12px' }}>{ficha.despuesBasico.intro}</p>
                )}
                <PreguntasList preguntas={ficha.despuesBasico.preguntas} />
              </FichaSection>

              {/* CICLO SUPERIOR */}
              <FichaSection title="Después — Guía de trabajo: Ciclo Superior (16 a 18 años)">
                {ficha.despuesSuperior.intro && (
                  <p style={{ fontSize: 12, color: 'var(--muted)', fontStyle: 'italic', margin: '0 0 12px' }}>{ficha.despuesSuperior.intro}</p>
                )}
                <PreguntasList preguntas={ficha.despuesSuperior.preguntas} />
              </FichaSection>

              {/* NOTAS DOCENTE */}
              <FichaSection title="Notas para el docente o preceptor">
                <div style={{ display: 'grid', gap: 12 }}>
                  {ficha.notasDocente.contenidoSensible && (
                    <NotaRow label="Contenido sensible" value={ficha.notasDocente.contenidoSensible} />
                  )}
                  {ficha.notasDocente.sugerenciaUsoParcial && (
                    <NotaRow label="Sugerencia de uso parcial" value={ficha.notasDocente.sugerenciaUsoParcial} />
                  )}
                  {ficha.notasDocente.actividadesComplementarias?.length > 0 && (
                    <div>
                      <p style={{ color: 'var(--muted)', fontSize: 9, letterSpacing: '.15em', textTransform: 'uppercase', margin: '0 0 6px' }}>Actividades complementarias</p>
                      <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 4 }}>
                        {ficha.notasDocente.actividadesComplementarias.map((a, i) => (
                          <li key={i} style={{ fontSize: 13, lineHeight: 1.6 }}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {ficha.notasDocente.enlacesAdicionales?.length > 0 && (
                    <div>
                      <p style={{ color: 'var(--muted)', fontSize: 9, letterSpacing: '.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>Enlaces adicionales</p>
                      <div style={{ display: 'grid', gap: 8 }}>
                        {ficha.notasDocente.enlacesAdicionales.map((e, i) => (
                          <a key={i} href={e.url} target="_blank" rel="noopener noreferrer"
                            className="hero-cta" style={{ marginTop: 0, fontSize: 10 }}
                          >
                            {YOUTUBE_ICON}
                            {e.label}
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
          <p className="print-only" style={{ textAlign: 'center', marginTop: 24, paddingTop: 10, borderTop: '1px solid #ccc', fontSize: '8pt' }}>
            Proyecto Cine y Reflexión · Laboratorio de Informática · E.E.S. N.º 2 Berisso · 2026
          </p>

        </div>
        {/* ══════ FIN FICHA ══════ */}

        {/* Botones de acción */}
        <div className="no-print" style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
          {ficha && (
            <button
              onClick={() => window.print()}
              className="action-button solid"
              aria-label="Imprimir o descargar como PDF la ficha pedagógica"
            >
              {PRINT_ICON}
              Imprimir / Descargar PDF
            </button>
          )}
          <Link to="/" className="action-button" aria-label="Volver al catálogo">
            {ARROW_ICON}
            Volver al catálogo
          </Link>
        </div>

      </div>
    </main>
  )
}

/* ─── Componentes auxiliares ─── */

function DataRow({ label, value }) {
  return (
    <>
      <dt>{label}</dt>
      <dd>{value ?? '—'}</dd>
    </>
  )
}

function FichaSection({ title, children }) {
  return (
    <div className="ficha-section" style={{ marginTop: 16 }}>
      <div className="ficha-section-header" style={{ borderBottom: '1px solid var(--line)' }}>
        {title}
      </div>
      <div className="ficha-section-body">
        {children}
      </div>
    </div>
  )
}

function PreguntasList({ preguntas }) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
      {preguntas.map((p, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span className="pregunta-num">{i + 1}</span>
          <span style={{ fontSize: 13, lineHeight: 1.65 }}>{p}</span>
        </li>
      ))}
    </ol>
  )
}

function NotaRow({ label, value }) {
  return (
    <div>
      <p style={{ color: 'var(--muted)', fontSize: 9, letterSpacing: '.15em', textTransform: 'uppercase', margin: '0 0 3px' }}>{label}</p>
      <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0 }}>{value}</p>
    </div>
  )
}
