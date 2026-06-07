'use client'
import { useEffect, useRef, useState } from 'react'

// Section 09 — Pricing Made Simple
// Three plans, billed monthly or annually. Hours-based managed-services model.

const plans = [
  {
    name: 'Starter Care',
    tagline: 'For teams who just need someone to call when Zoho breaks.',
    color: '#2563eb',
    hoursMonthly: '10 hrs',
    hoursMonthlyOnAnnual: '12 hrs',
    monthlyPrice: '$899',
    annualPrice: '$799',
    features: [
      'Up to 10 support hours / month',
      '48-hour response SLA',
      'Workflow & report fixes',
      'Monthly check-in call',
      'Plain-English change log',
      'Email + WhatsApp support',
    ],
    cta: 'Start with Starter',
  },
  {
    name: 'Growth',
    tagline: 'For teams scaling automations and integrations every month.',
    color: '#dc2626',
    featured: true,
    hoursMonthly: '25 hrs',
    hoursMonthlyOnAnnual: '30 hrs',
    monthlyPrice: '$1,999',
    annualPrice: '$1,749',
    features: [
      'Up to 25 support hours / month',
      '24-hour response SLA',
      'New automations & Deluge scripts',
      'Bi-weekly strategy call',
      'Custom dashboards & reports',
      'Dedicated account manager',
      'Priority support across channels',
    ],
    cta: 'Pick Growth',
  },
  {
    name: 'Scale',
    tagline: 'For mid-market teams running Zoho One as their core stack.',
    color: '#f59e0b',
    hoursMonthly: '60+ hrs',
    hoursMonthlyOnAnnual: '70+ hrs',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    features: [
      '60+ hours / month, scalable',
      'Same-day response SLA',
      'Fractional Zoho department',
      'Quarterly architecture review',
      'Multi-Zoho-product implementations',
      'API & integration roadmap',
      'On-call senior consultant',
    ],
    cta: 'Talk to Sales',
  },
]


const BOOKING = 'https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation'

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
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
    <section id="pricing" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }} ref={ref}>
      <div aria-hidden style={{ position: 'absolute', top: '18%', left: '-8%', width: 380, height: 380, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '8%', right: '-8%', width: 420, height: 420, background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 820, margin: '0 auto 50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-yellow">Pricing made simple</span>
          </div>
          <h2 className="section-title">
            How much does ZoFlowX <span className="grad-blue-red">actually cost?</span>
          </h2>
          <p className="section-sub mx-auto">
            No hidden fees. No long lock-ins. Pick what fits, change it next month if you need to.
          </p>

          {/* Billing toggle */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 0,
            background: '#f6f1ea', border: '1px solid #e8e3dc', borderRadius: 999,
            padding: 5, marginTop: 28,
          }}>
            {[{ k: false, label: 'Monthly' }, { k: true, label: 'Annual' }].map(opt => {
              const active = annual === opt.k
              return (
                <button
                  key={opt.label}
                  onClick={() => setAnnual(opt.k)}
                  style={{
                    background: active ? '#fff' : 'transparent',
                    color: active ? '#0b1220' : '#64748b',
                    border: 'none', borderRadius: 999,
                    padding: '8px 22px', fontSize: '0.85rem',
                    fontFamily: 'Inter,sans-serif', fontWeight: 700,
                    cursor: 'pointer', transition: 'all 0.3s',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    boxShadow: active ? '0 4px 12px rgba(11,18,32,0.08)' : 'none',
                  }}
                >
                  {opt.label}
                  {opt.k && (
                    <span style={{
                      background: 'var(--grad-tri)', color: '#fff',
                      fontSize: '0.66rem', fontWeight: 800,
                      padding: '2px 7px', borderRadius: 50, letterSpacing: 0.5,
                    }}>SAVE 12%</span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="row g-4 align-items-stretch justify-content-center">
          {plans.map((p, i) => {
            const dark = !!p.featured
            const hours = annual ? p.hoursMonthlyOnAnnual : p.hoursMonthly
            const bigPrice = annual ? p.annualPrice : p.monthlyPrice
            const showStrike = annual && p.monthlyPrice !== 'Custom' && p.annualPrice !== p.monthlyPrice

            // Theme tokens per card
            const cardBg     = dark ? 'linear-gradient(165deg,#161d2e 0%,#0b1220 100%)' : '#fff'
            const textMain   = dark ? '#ffffff' : '#0b1220'
            const textSub    = dark ? '#9aa6bd' : '#64748b'
            const textFeat   = dark ? '#cdd5e3' : '#334155'
            const borderCol  = dark ? 'rgba(255,255,255,0.10)' : '#e8e3dc'
            const dividerCol = dark ? 'rgba(255,255,255,0.10)' : '#f0ece6'
            const labelMuted = dark ? '#7e8aa3' : '#94a3b8'
            const pillBg     = `${p.color}${dark ? '26' : '14'}`
            const checkBg    = `${p.color}${dark ? '2e' : '15'}`

            return (
              <div key={p.name} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="price-card" style={{
                  background: cardBg,
                  border: `${dark ? '1px' : '1px'} solid ${borderCol}`,
                  borderRadius: 22,
                  padding: dark ? '40px 32px 32px' : '36px 30px 30px',
                  height: '100%', position: 'relative', overflow: 'hidden',
                  boxShadow: dark ? '0 30px 70px rgba(11,18,32,0.28)' : '0 8px 24px rgba(11,18,32,0.04)',
                  transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                  display: 'flex', flexDirection: 'column',
                  transform: dark ? 'translateY(-10px)' : 'none',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.transform = dark ? 'translateY(-16px)' : 'translateY(-6px)'
                    el.style.boxShadow = dark ? '0 40px 90px rgba(11,18,32,0.36)' : `0 28px 64px ${p.color}22`
                    el.style.borderColor = dark ? 'rgba(255,255,255,0.16)' : p.color
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.transform = dark ? 'translateY(-10px)' : 'none'
                    el.style.boxShadow = dark ? '0 30px 70px rgba(11,18,32,0.28)' : '0 8px 24px rgba(11,18,32,0.04)'
                    el.style.borderColor = borderCol
                  }}
                >
                  {/* top accent bar — tri-gradient for featured, plan color for others */}
                  <div aria-hidden style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: dark ? 4 : 3,
                    background: dark ? 'var(--grad-tri)' : p.color,
                    opacity: dark ? 1 : 0.85,
                  }} />

                  {/* soft glow behind featured card */}
                  {dark && (
                    <div aria-hidden style={{
                      position: 'absolute', top: -60, right: -60, width: 240, height: 240,
                      background: `radial-gradient(circle, ${p.color}33, transparent 65%)`,
                      filter: 'blur(20px)', pointerEvents: 'none',
                    }} />
                  )}

                  {dark && (
                    <div style={{
                      position: 'absolute', top: 18, right: 18,
                      background: 'var(--grad-tri)', color: '#fff',
                      fontSize: '0.66rem', fontWeight: 800, letterSpacing: 1.2,
                      padding: '6px 12px', borderRadius: 50,
                      fontFamily: 'Inter,sans-serif', textTransform: 'uppercase',
                      boxShadow: '0 8px 22px rgba(220,38,38,0.4)',
                    }}>Most Popular</div>
                  )}

                  {/* hours pill */}
                  <div style={{ position: 'relative' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: pillBg, color: p.color,
                      fontSize: '0.68rem', fontWeight: 800, letterSpacing: 0.8,
                      textTransform: 'uppercase', padding: '5px 12px', borderRadius: 999,
                      fontFamily: 'Inter,sans-serif',
                    }}>
                      <i className="bi bi-clock-history" /> {hours} / month
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'Inter,sans-serif', fontWeight: 800,
                    fontSize: '1.5rem', color: textMain,
                    margin: '18px 0 8px', letterSpacing: '-0.018em',
                  }}>{p.name}</h3>

                  <p style={{
                    fontSize: '0.9rem', color: textSub, lineHeight: 1.6,
                    fontFamily: 'Inter,sans-serif', marginBottom: 22, minHeight: 44,
                  }}>{p.tagline}</p>

                  <div style={{ marginBottom: 24 }}>
                    {showStrike && (
                      <div style={{
                        fontSize: '0.95rem', color: textSub, opacity: 0.7,
                        textDecoration: 'line-through', fontFamily: 'Inter,sans-serif',
                        marginBottom: 2,
                      }}>{p.monthlyPrice}</div>
                    )}
                    <div style={{
                      display: 'flex', alignItems: 'baseline', gap: 6,
                      fontFamily: 'Inter,sans-serif', fontWeight: 800,
                      fontSize: '2.6rem', color: textMain, lineHeight: 1,
                      letterSpacing: '-0.028em',
                    }}>
                      {bigPrice}
                      {bigPrice !== 'Custom' && (
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: textSub }}>/mo</span>
                      )}
                    </div>
                    <div style={{
                      fontSize: '0.78rem', color: textSub,
                      fontFamily: 'Inter,sans-serif', marginTop: 6,
                    }}>
                      {bigPrice === 'Custom'
                        ? 'tailored to your scope'
                        : annual ? 'billed annually' : 'billed monthly'}
                    </div>
                  </div>

                  <a href={BOOKING} target="_blank" rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      gap: 8, width: '100%',
                      background: dark ? 'var(--grad-tri)' : '#fff',
                      color: dark ? '#fff' : p.color,
                      border: dark ? 'none' : `2px solid ${p.color}`,
                      borderRadius: 12, padding: '0.78rem 1.4rem',
                      fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '0.92rem',
                      textDecoration: 'none', transition: 'all 0.3s',
                      marginBottom: 26,
                      boxShadow: dark ? '0 12px 28px rgba(220,38,38,0.36)' : 'none',
                    }}
                    onMouseEnter={e => {
                      if (!dark) { e.currentTarget.style.background = p.color; e.currentTarget.style.color = '#fff' }
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      if (!dark) { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = p.color }
                      e.currentTarget.style.transform = ''
                    }}
                  >
                    {p.cta} <i className="bi bi-arrow-right" />
                  </a>

                  <div style={{ paddingTop: 24, borderTop: `1px solid ${dividerCol}`, flex: 1 }}>
                    <div style={{
                      fontSize: '0.72rem', fontWeight: 700, letterSpacing: 1.5,
                      textTransform: 'uppercase', color: labelMuted,
                      marginBottom: 16, fontFamily: 'Inter,sans-serif',
                    }}>What you get</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {p.features.map(f => (
                        <li key={f} style={{
                          display: 'flex', alignItems: 'flex-start', gap: 10,
                          marginBottom: 12, fontSize: '0.88rem', color: textFeat,
                          fontFamily: 'Inter,sans-serif', lineHeight: 1.5,
                        }}>
                          <span style={{
                            width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
                            background: checkBg, color: p.color,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            <i className="bi bi-check2" style={{ fontSize: '0.82rem', fontWeight: 800 }} />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

       
      </div>
    </section>
  )
}
