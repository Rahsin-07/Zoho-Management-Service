'use client'
import { useEffect, useRef, useState } from 'react'

// Section 09 — Pricing Made Simple
// Three plans, billed monthly. Hours-based managed services model.

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

const addOns = [
  { icon: 'bi-arrow-left-right', label: 'Data migration project', color: '#2563eb' },
  { icon: 'bi-clipboard2-data',   label: 'One-time audit (2 weeks)', color: '#dc2626' },
  { icon: 'bi-rocket-takeoff',     label: 'New module implementation', color: '#f59e0b' },
  { icon: 'bi-mortarboard',        label: 'Team training workshops', color: '#2563eb' },
]

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
      <div aria-hidden style={{ position: 'absolute', top: '20%', left: '-8%', width: 380, height: 380, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '10%', right: '-8%', width: 420, height: 420, background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 820, margin: '0 auto 50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-yellow">Pricing made simple</span>
          </div>
          <h2 className="section-title">
            How much does ZoFlowX <span className="grad-blue-red">actually cost?</span>
          </h2>
          <p className="section-sub mx-auto">
            No hidden fees. No long lock-ins. Pick what fits — change it next month if you need to.
          </p>

          {/* Billing toggle */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 0,
            background: '#f6f1ea', border: '1px solid #e8e3dc', borderRadius: 999,
            padding: 5, marginTop: 28,
          }}>
            <button
              onClick={() => setAnnual(false)}
              style={{
                background: !annual ? '#fff' : 'transparent',
                color: !annual ? '#0b1220' : '#64748b',
                border: 'none', borderRadius: 999,
                padding: '8px 22px', fontSize: '0.85rem',
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.3s',
                boxShadow: !annual ? '0 4px 12px rgba(11,18,32,0.08)' : 'none',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{
                background: annual ? '#fff' : 'transparent',
                color: annual ? '#0b1220' : '#64748b',
                border: 'none', borderRadius: 999,
                padding: '8px 22px', fontSize: '0.85rem',
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.3s',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: annual ? '0 4px 12px rgba(11,18,32,0.08)' : 'none',
              }}
            >
              Annual
              <span style={{
                background: 'var(--grad-tri)', color: '#fff',
                fontSize: '0.66rem', fontWeight: 800,
                padding: '2px 7px', borderRadius: 50,
                letterSpacing: 0.5,
              }}>SAVE 12%</span>
            </button>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          {plans.map((p, i) => {
            const isFeatured = p.featured
            return (
              <div key={p.name} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="price-card" style={{
                  background: '#fff',
                  border: `${isFeatured ? '2px' : '1px'} solid ${isFeatured ? p.color : '#e8e3dc'}`,
                  borderRadius: 22,
                  padding: '36px 30px 30px',
                  height: '100%', position: 'relative',
                  boxShadow: isFeatured ? `0 24px 60px ${p.color}1f` : '0 8px 24px rgba(11,18,32,0.04)',
                  transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                  display: 'flex', flexDirection: 'column',
                  transform: isFeatured ? 'translateY(-8px)' : 'none',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.transform = isFeatured ? 'translateY(-14px)' : 'translateY(-6px)'
                    el.style.boxShadow = `0 32px 72px ${p.color}2e`
                    el.style.borderColor = p.color
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.transform = isFeatured ? 'translateY(-8px)' : 'none'
                    el.style.boxShadow = isFeatured ? `0 24px 60px ${p.color}1f` : '0 8px 24px rgba(11,18,32,0.04)'
                    el.style.borderColor = isFeatured ? p.color : '#e8e3dc'
                  }}
                >
                  {isFeatured && (
                    <div aria-hidden style={{
                      position: 'absolute', top: -1, left: -1, right: -1, height: 4,
                      borderRadius: '22px 22px 0 0',
                      background: 'var(--grad-tri)',
                    }} />
                  )}
                  {isFeatured && (
                    <div style={{
                      position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--grad-tri)', color: '#fff',
                      fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1.4,
                      padding: '6px 14px', borderRadius: 50,
                      fontFamily: 'Inter,sans-serif', textTransform: 'uppercase',
                      boxShadow: '0 8px 22px rgba(220,38,38,0.32)',
                    }}>Most Popular</div>
                  )}

                  <div style={{
                    fontFamily: 'Inter,sans-serif', fontSize: '0.7rem',
                    fontWeight: 800, letterSpacing: 1.8, color: p.color,
                    textTransform: 'uppercase', marginBottom: 10,
                  }}>{annual ? p.hoursMonthlyOnAnnual : p.hoursMonthly} / month</div>

                  <h3 style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                    fontSize: '1.5rem', color: '#0b1220',
                    marginBottom: 8, letterSpacing: '-0.018em',
                  }}>{p.name}</h3>

                  <p style={{
                    fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6,
                    fontFamily: 'Inter,sans-serif', marginBottom: 22, minHeight: 44,
                  }}>{p.tagline}</p>

                  <div style={{ marginBottom: 24 }}>
                    <div style={{
                      fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                      fontSize: '2.6rem', color: '#0b1220', lineHeight: 1,
                      letterSpacing: '-0.028em',
                    }}>
                      {annual ? p.annualPrice : p.monthlyPrice}
                    </div>
                    <div style={{
                      fontSize: '0.78rem', color: '#64748b',
                      fontFamily: 'Inter,sans-serif', marginTop: 6,
                    }}>
                      {p.monthlyPrice === 'Custom' ? 'tailored to your scope' : `per month${annual ? ', billed annually' : ', billed monthly'}`}
                    </div>
                  </div>

                  <a href="#consultation"
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      gap: 8, width: '100%',
                      background: isFeatured ? 'var(--grad-tri)' : '#fff',
                      color: isFeatured ? '#fff' : p.color,
                      border: isFeatured ? 'none' : `2px solid ${p.color}`,
                      borderRadius: 12, padding: '0.78rem 1.4rem',
                      fontFamily: 'Plus Jakarta Sans,sans-serif',
                      fontWeight: 700, fontSize: '0.92rem',
                      textDecoration: 'none', transition: 'all 0.3s',
                      marginBottom: 26,
                      boxShadow: isFeatured ? '0 10px 26px rgba(220,38,38,0.32)' : 'none',
                    }}
                    onMouseEnter={e => {
                      if (!isFeatured) {
                        e.currentTarget.style.background = p.color
                        e.currentTarget.style.color = '#fff'
                      }
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      if (!isFeatured) {
                        e.currentTarget.style.background = '#fff'
                        e.currentTarget.style.color = p.color
                      }
                      e.currentTarget.style.transform = ''
                    }}
                  >
                    {p.cta} <i className="bi bi-arrow-right" />
                  </a>

                  <div style={{ paddingTop: 24, borderTop: '1px solid #f0ece6', flex: 1 }}>
                    <div style={{
                      fontSize: '0.72rem', fontWeight: 700, letterSpacing: 1.5,
                      textTransform: 'uppercase', color: '#94a3b8',
                      marginBottom: 16, fontFamily: 'Inter,sans-serif',
                    }}>What you get</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {p.features.map(f => (
                        <li key={f} style={{
                          display: 'flex', alignItems: 'flex-start', gap: 10,
                          marginBottom: 10, fontSize: '0.88rem', color: '#334155',
                          fontFamily: 'Inter,sans-serif', lineHeight: 1.55,
                        }}>
                          <i className="bi bi-check2" style={{
                            color: p.color, fontSize: '1.05rem', marginTop: 1, flexShrink: 0, fontWeight: 800,
                          }} />
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

        {/* Add-ons strip */}
        <div className="fade-up" style={{
          marginTop: 60, padding: '32px 32px',
          background: '#fafaf7', border: '1px solid #e8e3dc', borderRadius: 22,
        }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-4">
              <div style={{
                fontFamily: 'Inter,sans-serif', fontSize: '0.7rem',
                fontWeight: 700, letterSpacing: 1.8,
                color: '#64748b', textTransform: 'uppercase', marginBottom: 6,
              }}>Project-based add-ons</div>
              <div style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: '1.18rem', color: '#0b1220', letterSpacing: '-0.012em',
              }}>One-off work, scoped before we start</div>
            </div>
            <div className="col-lg-8">
              <div className="row g-3">
                {addOns.map(a => (
                  <div key={a.label} className="col-md-6">
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      background: '#fff', border: '1px solid #e8e3dc', borderRadius: 14,
                      padding: '12px 16px', transition: 'all 0.28s',
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = a.color
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = `0 10px 24px ${a.color}1f`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = '#e8e3dc'
                        e.currentTarget.style.transform = ''
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: 10,
                        background: `${a.color}15`, color: a.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1rem', flexShrink: 0,
                      }}>
                        <i className={`bi ${a.icon}`} />
                      </div>
                      <div style={{
                        fontFamily: 'Plus Jakarta Sans,sans-serif',
                        fontWeight: 700, fontSize: '0.92rem', color: '#0b1220',
                      }}>{a.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div className="fade-up" style={{
          textAlign: 'center', marginTop: 32,
          fontSize: '0.86rem', color: '#64748b',
          fontFamily: 'Inter,sans-serif',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 18, flexWrap: 'wrap',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i className="bi bi-shield-check" style={{ color: '#10b981' }} /> No long lock-ins
          </span>
          <span style={{ width: 1, height: 14, background: '#e8e3dc' }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i className="bi bi-arrow-repeat" style={{ color: '#2563eb' }} /> Change plan any month
          </span>
          <span style={{ width: 1, height: 14, background: '#e8e3dc' }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i className="bi bi-receipt" style={{ color: '#f59e0b' }} /> Transparent time logs
          </span>
        </div>
      </div>
    </section>
  )
}
