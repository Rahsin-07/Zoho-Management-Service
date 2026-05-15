'use client'
import { useEffect, useRef } from 'react'

// Section 02 — The Real Problem
const problems = [
  {
    num: '01',
    icon: 'bi-clock-history',
    color: '#2563eb',
    title: 'Your Zoho was set up once and never touched again',
    desc: 'Half of the modules are not utilized. Emails are sent to people who left two years ago through workflows. No one knows what the custom fields are for. Sound familiar?',
  },
  {
    num: '02',
    icon: 'bi-cash-stack',
    color: '#dc2626',
    title: "You can't justify hiring a full-time Zoho admin",
    desc: "A senior Zoho developer is expensive. They're not required 40 hours a week — but they are required when things go wrong at month-end.",
  },
  {
    num: '03',
    icon: 'bi-bar-chart-line',
    color: '#f59e0b',
    title: "Your reports don't tell you anything useful",
    desc: 'You wanted dashboards that show pipeline, revenue and deal status. You ended up with a list of leads in alphabetical order. Not helpful.',
  },
  {
    num: '04',
    icon: 'bi-person-x',
    color: '#0b1220',
    title: 'Your last Zoho consultant disappeared',
    desc: "They built things you don't understand, left no documentation, and stopped replying to emails. You now have a system no one can maintain.",
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
          <p className="section-sub mx-auto">
            We&apos;ve seen the same four patterns in nearly every new ZoFlowX client. Recognize any of them?
          </p>
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
                    fontFamily: 'Plus Jakarta Sans,sans-serif',
                    fontSize: '1.6rem', fontWeight: 800,
                    color: '#cbd5e1', letterSpacing: 1.5,
                    transition: 'color 0.3s',
                  }}>{p.num}</div>
                </div>

                <h3 style={{
                  fontSize: '1.18rem', fontWeight: 800, marginBottom: 12,
                  color: '#0b1220', fontFamily: 'Plus Jakarta Sans,sans-serif',
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

        {/* CTA */}
        <div className="fade-up text-center" style={{ marginTop: 60 }}>
          <div style={{
            display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
            padding: '32px 36px', background: '#f6f1ea',
            border: '1px solid #e8e3dc', borderRadius: 20, gap: 14, maxWidth: 620,
          }}>
            <div style={{
              fontSize: '0.96rem', color: '#334155',
              fontFamily: 'Inter,sans-serif', lineHeight: 1.7,
            }}>
              Sounds like your situation? Let&apos;s fix it. Book a free 30-minute audit and we&apos;ll show you <strong style={{ color: '#0b1220' }}>exactly what&apos;s broken and how to fix it</strong>.
            </div>
            <a href="#consultation" className="btn-gradient ahover">
              Book My Free Audit <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
