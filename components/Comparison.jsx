'use client'
import { useEffect, useRef } from 'react'

// Section 06 — The Honest Comparison
const rows = [
  { criterion: 'Monthly cost',         inhouse: '$6,000+ per month, fixed',                       us: 'Pay for hours used. Often 60–70% less.' },
  { criterion: 'Range of skills',      inhouse: 'One person, one specialty',                       us: 'Consultant + developer + PM + support' },
  { criterion: 'When they\'re sick or quit', inhouse: 'Work stops. Knowledge walks out the door.',  us: 'Backup team. Documented work. No stoppage.' },
  { criterion: 'Speed to start',       inhouse: '6–12 weeks of hiring + onboarding',               us: 'Kick off within 7 days of signing' },
  { criterion: 'Industry experience',  inhouse: 'Whatever they happened to do before',             us: '200+ implementations across industries' },
  { criterion: 'Documentation',        inhouse: 'Usually missing or outdated',                     us: 'Plain-English docs for every change' },
  { criterion: 'Scaling up or down',   inhouse: 'Hire/fire cycle — painful',                       us: 'Add or reduce hours month to month' },
  { criterion: 'Accountability',       inhouse: 'One person responsible (and already busy)',       us: 'Single account manager. Clear SLA.' },
]

export default function Comparison() {
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
    <section id="comparison" style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }} ref={ref}>
      <div aria-hidden style={{ position: 'absolute', top: -100, right: -100, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: -100, left: -100, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 820, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-yellow">The honest comparison</span>
          </div>
          <h2 className="section-title">
            Hiring in-house <span style={{ color: '#94a3b8', fontWeight: 700 }}>vs.</span> <span className="grad-blue-red">working with ZoFlowX</span>
          </h2>
          <p className="section-sub mx-auto">
            We get it — hiring an internal Zoho admin sounds simpler. Here&apos;s what each path actually looks like, by the numbers.
          </p>
        </div>

        {/* Desktop table */}
        <div className="d-none d-lg-block fade-up">
          <div style={{
            background: '#fff', border: '1px solid #e8e3dc', borderRadius: 24,
            overflow: 'hidden', boxShadow: '0 30px 80px rgba(11,18,32,0.08)',
            position: 'relative',
          }}>
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 4,
              background: 'var(--grad-tri)',
            }} />

            {/* Header row */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr',
              alignItems: 'center', padding: '26px 32px',
              background: '#f6f1ea', borderBottom: '1px solid #e8e3dc',
            }}>
              <div style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: '0.78rem', letterSpacing: 1.8, textTransform: 'uppercase',
                color: '#64748b',
              }}>What you get</div>
              <div style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: '0.94rem', color: '#0b1220',
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{
                  width: 32, height: 32, borderRadius: 8, background: '#fee2e2',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: '#dc2626',
                }}><i className="bi bi-person" /></span>
                In-house Zoho hire / freelancer
              </div>
              <div style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: '0.94rem', color: '#0b1220',
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'var(--grad-tri)', color: '#fff',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.85rem', fontWeight: 800,
                }}>Z</span>
                ZoFlowX Managed Services
              </div>
            </div>

            {/* Data rows */}
            {rows.map((row, i) => (
              <div key={row.criterion}
                style={{
                  display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr',
                  alignItems: 'center', padding: '22px 32px',
                  borderBottom: i < rows.length - 1 ? '1px solid #f0ece6' : 'none',
                  background: '#fff', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#fdfaf4'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                <div style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                  fontSize: '0.94rem', color: '#0b1220',
                }}>{row.criterion}</div>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  fontSize: '0.9rem', color: '#64748b',
                  fontFamily: 'Inter,sans-serif', lineHeight: 1.5,
                }}>
                  <i className="bi bi-x-circle-fill" style={{ color: '#dc2626', fontSize: '1rem', marginTop: 2, flexShrink: 0 }} />
                  <span>{row.inhouse}</span>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  fontSize: '0.92rem', color: '#0b1220',
                  fontFamily: 'Inter,sans-serif', lineHeight: 1.5, fontWeight: 500,
                }}>
                  <i className="bi bi-check-circle-fill" style={{ color: '#10b981', fontSize: '1rem', marginTop: 2, flexShrink: 0 }} />
                  <span>{row.us}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet — stacked cards per row */}
        <div className="d-lg-none fade-up">
          {rows.map((row, i) => (
            <div key={row.criterion} style={{
              background: '#fff', border: '1px solid #e8e3dc', borderRadius: 16,
              padding: '20px 22px', marginBottom: 12,
              boxShadow: '0 6px 18px rgba(11,18,32,0.04)',
            }}>
              <div style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: '0.94rem', color: '#0b1220', marginBottom: 14,
              }}>{row.criterion}</div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                <i className="bi bi-x-circle-fill" style={{ color: '#dc2626', fontSize: '1rem', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1.5, color: '#94a3b8', textTransform: 'uppercase', marginBottom: 2, fontFamily: 'Inter,sans-serif' }}>In-house</div>
                  <div style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, fontFamily: 'Inter,sans-serif' }}>{row.inhouse}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <i className="bi bi-check-circle-fill" style={{ color: '#10b981', fontSize: '1rem', marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: 1.5, color: '#10b981', textTransform: 'uppercase', marginBottom: 2, fontFamily: 'Inter,sans-serif' }}>ZoFlowX</div>
                  <div style={{ fontSize: '0.9rem', color: '#0b1220', fontWeight: 500, lineHeight: 1.55, fontFamily: 'Inter,sans-serif' }}>{row.us}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-up text-center" style={{ marginTop: 56 }}>
          <p style={{
            fontSize: '1rem', color: '#475569',
            fontFamily: 'Inter,sans-serif', marginBottom: 20, maxWidth: 600, margin: '0 auto 20px',
          }}>
            Stop paying for a Zoho team that&apos;s only busy half the time. Get the same skills on demand with ZoFlowX.
          </p>
          <a href="#consultation" className="btn-gradient ahover">
            Get a Custom Quote <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
