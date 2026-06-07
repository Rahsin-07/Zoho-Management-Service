'use client'
import { useEffect, useRef } from 'react'

// Section 02, The Real Problem
const problems = [
  {
    num: '01',
    icon: 'bi-clock-history',
    color: '#2563eb',
    title: 'Your Zoho was set up once and never touched again',
    desc: 'Half of the modules are not utilized. Emails are sent to individuals who left two years ago through workflows. No one knows what the custom fields are used for. Sound familiar?',
  },
  {
    num: '02',
    icon: 'bi-cash-stack',
    color: '#dc2626',
    title: "You can't justify hiring a full-time Zoho admin",
    desc: "A senior Zoho developer is a big money spender. They're not required 40 hours a week, but they are required when things go wrong at the end of the month.",
  },
  {
    num: '03',
    icon: 'bi-bar-chart-line',
    color: '#f59e0b',
    title: "Your reports don't tell you anything useful",
    desc: 'You wanted dashboards that would give you pipeline, revenue and deal status. You ended up with a list of leads in alphabetical order. Not helpful',
  },
  {
    num: '04',
    icon: 'bi-person-x',
    color: '#0b1220',
    title: 'Your last Zoho consultant disappeared',
    desc: "They created things you don't comprehend, didn't leave any documentation, and ceased responding to e-mails. You now have a system that no one can keep up.",
  },
]

export default function Problem() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.12 })
    ref.current?.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="problem" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }} ref={ref}>
      <div aria-hidden style={{ position: 'absolute', top: 60, right: -120, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,38,38,0.08), transparent 65%)', filter: 'blur(20px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 820, margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">The real problem</span>
          </div>
          <h2 className="section-title">
            Zoho is powerful. <span className="grad-blue-red">But only when someone</span> actually sets it up right
          </h2>
        </div>

        <div className="row g-4">
          {problems.map((p, i) => (
            <div key={p.num} className="col-md-6 fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="prob-card" style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 20,
                padding: '34px 30px', height: '100%',
                transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden', cursor: 'default',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 24px 60px ${p.color}1f`
                  el.style.borderColor = p.color
                  el.querySelector('.prob-glow').style.opacity = '1'
                  el.querySelector('.prob-icon').style.background = p.color
                  el.querySelector('.prob-icon').style.color = '#fff'
                  el.querySelector('.prob-icon').style.transform = 'rotate(-6deg) scale(1.08)'
                  el.querySelector('.prob-num').style.color = p.color
                  el.querySelector('.prob-bar').style.transform = 'scaleX(1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.prob-glow').style.opacity = '0'
                  el.querySelector('.prob-icon').style.background = `${p.color}15`
                  el.querySelector('.prob-icon').style.color = p.color
                  el.querySelector('.prob-icon').style.transform = ''
                  el.querySelector('.prob-num').style.color = '#cbd5e1'
                  el.querySelector('.prob-bar').style.transform = 'scaleX(0)'
                }}
              >
                <div className="prob-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: p.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.4s ease-out',
                }} />
                <div className="prob-glow" aria-hidden style={{
                  position: 'absolute', top: -80, right: -80, width: 240, height: 240,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${p.color}28, transparent 70%)`,
                  opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
                }} />

                <div style={{
                  display: 'flex', alignItems: 'flex-start',
                  justifyContent: 'space-between', marginBottom: 22, position: 'relative',
                }}>
                  <div className="prob-icon" style={{
                    width: 60, height: 60, borderRadius: 16,
                    background: `${p.color}15`, color: p.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem', transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
                  }}>
                    <i className={`bi ${p.icon}`} />
                  </div>
                  <div className="prob-num" style={{
                    fontFamily: 'Inter,sans-serif',
                    fontSize: '1.6rem', fontWeight: 800,
                    color: '#cbd5e1', letterSpacing: 1.5,
                    transition: 'color 0.3s',
                  }}>{p.num}</div>
                </div>

                <h3 style={{
                  fontSize: '1.18rem', fontWeight: 800, marginBottom: 12,
                  color: '#0b1220', fontFamily: 'Inter,sans-serif',
                  lineHeight: 1.32, letterSpacing: '-0.012em',
                }}>{p.title}</h3>

                <p style={{
                  fontSize: '0.94rem', color: '#64748b', lineHeight: 1.72,
                  marginBottom: 0, fontFamily: 'Inter,sans-serif',
                }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — One Partner band (compact) */}
        <div className="fade-up" style={{ marginTop: 56 }}>
          <div style={{
            position: 'relative', overflow: 'hidden', borderRadius: 20,
            padding: 'clamp(42px, 6vw, 52px)',
            background: 'linear-gradient(120deg, #0a0f1f 0%, #0f1f3d 48%, #16294d 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 18px 48px rgba(11,18,32,0.28)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 28, flexWrap: 'wrap', fontFamily: 'Inter,sans-serif',
          }}>
            {/* glows */}
            <div aria-hidden style={{
              position: 'absolute', top: -90, right: -60, width: 300, height: 300, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(223,58,60,0.18), transparent 65%)',
              filter: 'blur(8px)', pointerEvents: 'none',
            }} />
            <div aria-hidden style={{
              position: 'absolute', bottom: -100, left: -50, width: 280, height: 280, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(38,110,179,0.16), transparent 68%)',
              filter: 'blur(8px)', pointerEvents: 'none',
            }} />
            {/* dotted texture */}
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '20px 20px', opacity: 0.5, pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', flex: '1 1 460px', minWidth: 0 }}>
              <span style={{
                display: 'inline-block', fontFamily: 'Inter,sans-serif',
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: '#F8B222', marginBottom: 10,
              }}>One partner. Every Zoho service.</span>

              <h2 style={{
                fontFamily: 'Inter,sans-serif', fontSize: 'clamp(1.15rem, 1.9vw, 1.6rem)',
                fontWeight: 600, lineHeight: 1.32, letterSpacing: '-0.01em', color: '#fff', margin: 0,
              }}>
                Zoho works best when it&apos;s set up right. We make sure your business is never on the{' '}
                <span style={{ color: '#DF3A3C', fontWeight: 700 }}>wrong side of that gap.</span>
              </h2>
            </div>

            <div style={{ position: 'relative', flex: '0 0 auto' }}>
              <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation"
                target="_blank" rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 22px', borderRadius: 11,
                  background: 'linear-gradient(135deg, #DF3A3C 0%, #b71f21 100%)',
                  color: '#fff', fontFamily: 'Inter,sans-serif', fontSize: '0.9rem',
                  fontWeight: 600, textDecoration: 'none',
                  boxShadow: '0 10px 26px rgba(223,58,60,0.34)',
                  transition: 'all 0.3s cubic-bezier(.2,.7,.2,1)', whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 14px 32px rgba(223,58,60,0.46)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = '0 10px 26px rgba(223,58,60,0.34)'
                }}
              >
                Hire Certified Zoho Experts <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
