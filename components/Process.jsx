'use client'
import { useEffect, useRef } from 'react'

// Section 05, How We Work (4 steps from brief)
const steps = [
  { num: '01', icon: 'bi-headset',         title: 'Discover', desc: '30 minutes call to listen. What is going well, what isn\'t, where you want to go. No pitch. No pressure.' },
  { num: '02', icon: 'bi-clipboard2-data', title: 'Audit',    desc: 'We audit your current Zoho configuration (or your current tools) and provide you with a written report of gaps, fixes and opportunities.' },
  { num: '03', icon: 'bi-hammer',          title: 'Build',    desc: 'We set up, tailor and integrate Zoho as it should be. Demos are provided at each milestone, not at the end.' },
  { num: '04', icon: 'bi-activity',        title: 'Run',      desc: 'We stay on as your managed services team. Monthly check-ins, quick support and ongoing improvement.' },
]

// Tri-color flow across 4 steps
const STEP_COLORS = [
  { ring: '#3b82f6', node: 'linear-gradient(135deg, #2563eb, #3b82f6)' },
  { ring: '#ef4444', node: 'linear-gradient(135deg, #dc2626, #ef4444)' },
  { ring: '#fbbf24', node: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  { ring: '#a5b4fc', node: 'linear-gradient(135deg, #2563eb, #a78bfa)' },
]

export default function Process() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" style={{
      background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
      position: 'relative', overflow: 'hidden', color: '#fff',
    }} ref={ref}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 20%, rgba(99,179,237,0.22) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(220,38,38,0.16) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.14) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.25 }} className="grid-pattern-light" />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2.8px',
              textTransform: 'uppercase', color: '#f59e0b', marginBottom: 14,
            }}>
              <span style={{ width: 28, height: 2, background: 'currentColor', borderRadius: 2 }} />
              How we work
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Inter,sans-serif',
            fontSize: 'clamp(2rem, 4.3vw, 3.15rem)', fontWeight: 800,
            color: '#fff', marginBottom: 18, letterSpacing: '-0.024em', lineHeight: 1.08,
          }}>
           Business Growth <span style={{
              background: 'linear-gradient(95deg, #93c5fd, #fca5a5, #fcd34d)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Stories with Zoho </span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.74)', fontSize: '1.04rem',
            maxWidth: 680, margin: '0 auto',
            fontFamily: 'Inter,sans-serif', lineHeight: 1.72,
          }}>
            Each ZoFlowX engagement is the same, making it easy to know what&apos;s going on and what&apos;s next.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="d-none d-lg-block fade-up" style={{ position: 'relative', marginTop: 70 }}>
          <div aria-hidden style={{
            position: 'absolute', top: 36, left: '10%', right: '10%', height: 3,
            background: 'linear-gradient(90deg, rgba(147,197,253,0.50) 0%, rgba(252,165,165,0.55) 50%, rgba(252,211,77,0.6) 100%)',
            borderRadius: 3,
          }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {steps.map((s, i) => {
              const c = STEP_COLORS[i]
              return (
                <div key={s.num} className="step-cell" style={{ textAlign: 'center', position: 'relative', cursor: 'default' }}>
                  <div className="step-node" style={{
                    width: 76, height: 76, margin: '0 auto 22px',
                    borderRadius: '50%', background: c.node,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '1.65rem',
                    boxShadow: `0 10px 28px ${c.ring}66, 0 0 0 6px #0b1220, 0 0 0 7px ${c.ring}66`,
                    transition: 'transform 0.36s cubic-bezier(.2,.7,.2,1)',
                    position: 'relative', zIndex: 2,
                  }}>
                    <i className={`bi ${s.icon}`} />
                  </div>
                  <div style={{
                    fontFamily: 'Inter,sans-serif', fontSize: '0.72rem',
                    fontWeight: 800, color: '#f59e0b', letterSpacing: 2.2, marginBottom: 6,
                  }}>STEP {s.num}</div>
                  <h3 style={{
                    fontFamily: 'Inter,sans-serif', fontSize: '1.18rem',
                    fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.3,
                  }}>{s.title}</h3>
                  <p style={{
                    fontSize: '0.88rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65,
                    fontFamily: 'Inter,sans-serif', padding: '0 8px', marginBottom: 0,
                  }}>{s.desc}</p>
                </div>
              )
            })}
          </div>
          <style>{`
            .step-cell:hover .step-node { transform: translateY(-6px) scale(1.07); }
          `}</style>
        </div>

        {/* Mobile vertical timeline */}
        <div className="d-lg-none fade-up">
          {steps.map((s, i) => {
            const c = STEP_COLORS[i]
            return (
              <div key={s.num} style={{ display: 'flex', gap: 20, padding: '20px 0', position: 'relative' }}>
                {i < steps.length - 1 && (
                  <div aria-hidden style={{
                    position: 'absolute', left: 29, top: 72,
                    width: 2, height: 'calc(100% - 42px)',
                    background: `linear-gradient(180deg, ${c.ring}80, ${STEP_COLORS[i+1].ring}80)`,
                  }} />
                )}
                <div style={{
                  width: 60, height: 60, minWidth: 60, borderRadius: '50%',
                  background: c.node, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '1.3rem',
                  boxShadow: `0 8px 22px ${c.ring}66`, zIndex: 1,
                }}>
                  <i className={`bi ${s.icon}`} />
                </div>
                <div style={{ paddingTop: 6 }}>
                  <div style={{
                    fontFamily: 'Inter,sans-serif', fontSize: '0.7rem',
                    fontWeight: 800, color: '#f59e0b', letterSpacing: 2.2, marginBottom: 4,
                  }}>STEP {s.num}</div>
                  <h3 style={{
                    fontFamily: 'Inter,sans-serif', fontSize: '1.1rem',
                    fontWeight: 800, color: '#fff', marginBottom: 6,
                  }}>{s.title}</h3>
                  <p style={{
                    fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6,
                    fontFamily: 'Inter,sans-serif',
                  }}>{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="fade-up text-center" style={{ marginTop: 60 }}>
          <p style={{
            color: 'rgba(255,255,255,0.74)', fontFamily: 'Inter,sans-serif',
            fontSize: '0.95rem', marginBottom: 18,
          }}>Ready to take the first step? The Discover call is on us.</p>
         <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" target="_blank" rel="noreferrer"
  className="btn-accent ahover"
  style={{ background: 'linear-gradient(135deg, #DF3A3C 0%, #b71f21 100%)',color:"white" }}>
  Start with a Free Call
</a>
        </div>
      </div>
    </section>
  )
}
