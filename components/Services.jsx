'use client'
import { useEffect, useRef } from 'react'

// Section 03 — What We Do (8 services from brief)
const PALETTE = ['#2563eb', '#dc2626', '#f59e0b']

const services = [
  {
    num: '01', tag: 'Strategy', icon: 'bi-compass',
    title: 'Zoho Consulting & Strategy',
    desc: 'A senior consultant designs your business processes in Zoho before you write a single line of code. You receive a clear plan — not guesswork.',
    cta: 'Book My Strategy Call',
  },
  {
    num: '02', tag: 'Setup', icon: 'bi-tools',
    title: 'Zoho Implementation',
    desc: 'As a trusted Zoho Implementation Partner, we configure your CRM, Books, Desk or entire Zoho One suite around your team\'s way of working.',
    cta: 'Set Up My Zoho',
  },
  {
    num: '03', tag: 'Tailor', icon: 'bi-sliders',
    title: 'Zoho Customization',
    desc: 'Custom modules, fields, layouts, Deluge scripts, and approval flows — fitted to your business rules instead of templated defaults.',
    cta: 'Customize My Zoho',
  },
  {
    num: '04', tag: 'Migrate', icon: 'bi-arrow-left-right',
    title: 'Data Migration',
    desc: 'Moving from Salesforce, HubSpot, Pipedrive, Tally, or spreadsheets? We move your data cleanly — no duplicates, no missing fields, no broken history.',
    cta: 'Migrate My Data',
  },
  {
    num: '05', tag: 'Connect', icon: 'bi-plug',
    title: 'Third-Party Integrations',
    desc: 'Integrate Zoho with QuickBooks, Shopify, WooCommerce, your phone system, your billing tool — anything with an API. We make the pieces talk to each other.',
    cta: 'Connect My Tools',
  },
  {
    num: '06', tag: 'Support', icon: 'bi-life-preserver',
    title: 'Ongoing Support & Training',
    desc: 'Monthly support, quick response to tickets, and live training for your team. If it breaks, you call us — and we fix it. Documented every step.',
    cta: 'Get Ongoing Support',
  },
  {
    num: '07', tag: 'Automate', icon: 'bi-lightning-charge',
    title: 'Workflow Automation',
    desc: 'We automate your repetitive tasks — follow-up emails, lead routing, deal stage triggers, approvals — so your team stops doing busy work.',
    cta: 'Automate My Workflows',
  },
  {
    num: '08', tag: 'Reports', icon: 'bi-graph-up-arrow',
    title: 'Custom Reports & Dashboards',
    desc: 'The reports your boss actually wants to see. Pipeline by source. Revenue per rep. Sales velocity. Real numbers — not noise.',
    cta: 'Build My Reports',
  },
]

function ServiceCard({ s, color, delay }) {
  return (
    <div className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="svc-card" style={{
        background: '#fff', border: '1px solid #e8e3dc', borderRadius: 20,
        padding: '34px 28px', height: '100%',
        transition: 'all 0.38s cubic-bezier(.2,.7,.2,1)',
        cursor: 'default', position: 'relative', overflow: 'hidden',
      }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.transform = 'translateY(-7px)'
          el.style.boxShadow = `0 28px 64px ${color}26`
          el.style.borderColor = color
          el.querySelector('.svc-glow').style.opacity = '1'
          el.querySelector('.svc-icon').style.background = color
          el.querySelector('.svc-icon').style.color = '#fff'
          el.querySelector('.svc-icon').style.transform = 'rotate(-6deg) scale(1.08)'
          el.querySelector('.svc-cta').style.color = color
          el.querySelector('.svc-cta').style.gap = '12px'
          el.querySelector('.svc-tag').style.background = color
          el.querySelector('.svc-tag').style.color = '#fff'
          el.querySelector('.svc-bar').style.transform = 'scaleX(1)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.transform = ''
          el.style.boxShadow = ''
          el.style.borderColor = '#e8e3dc'
          el.querySelector('.svc-glow').style.opacity = '0'
          el.querySelector('.svc-icon').style.background = `${color}15`
          el.querySelector('.svc-icon').style.color = color
          el.querySelector('.svc-icon').style.transform = ''
          el.querySelector('.svc-cta').style.color = '#0b1220'
          el.querySelector('.svc-cta').style.gap = '8px'
          el.querySelector('.svc-tag').style.background = `${color}15`
          el.querySelector('.svc-tag').style.color = color
          el.querySelector('.svc-bar').style.transform = 'scaleX(0)'
        }}
      >
        <div className="svc-bar" aria-hidden style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: color, transform: 'scaleX(0)', transformOrigin: 'left',
          transition: 'transform 0.45s ease-out',
        }} />
        <div className="svc-glow" aria-hidden style={{
          position: 'absolute', top: -60, right: -60, width: 220, height: 220,
          borderRadius: '50%', background: `radial-gradient(circle, ${color}28, transparent 70%)`,
          opacity: 0, transition: 'opacity 0.38s', pointerEvents: 'none',
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, position: 'relative' }}>
          <div className="svc-icon" style={{
            width: 58, height: 58, borderRadius: 14,
            background: `${color}15`, color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.55rem', transition: 'all 0.32s',
          }}>
            <i className={`bi ${s.icon}`} />
          </div>
          <div style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '0.88rem',
            fontWeight: 800, color: '#cbd5e1', letterSpacing: 1.5,
          }}>{s.num}</div>
        </div>

        <span className="svc-tag" style={{
          display: 'inline-block', background: `${color}15`, color,
          fontSize: '0.66rem', fontWeight: 800, letterSpacing: 1.5,
          textTransform: 'uppercase', padding: '4px 10px', borderRadius: 50,
          marginBottom: 12, fontFamily: 'Inter,sans-serif', transition: 'all 0.32s',
        }}>{s.tag}</span>

        <h3 style={{
          fontSize: '1.14rem', fontWeight: 800, marginBottom: 12,
          color: '#0b1220', fontFamily: 'Plus Jakarta Sans,sans-serif', lineHeight: 1.3,
          letterSpacing: '-0.012em',
        }}>{s.title}</h3>

        <p style={{
          fontSize: '0.92rem', color: '#64748b', lineHeight: 1.72,
          marginBottom: 22, fontFamily: 'Inter,sans-serif',
        }}>{s.desc}</p>

        <a href="#consultation" className="svc-cta" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: '0.86rem', fontWeight: 700, color: '#0b1220',
          textDecoration: 'none', fontFamily: 'Plus Jakarta Sans,sans-serif',
          transition: 'all 0.28s',
        }}>
          {s.cta} <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  )
}

export default function Services() {
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
    <section id="services" style={{ background: '#fafaf7', position: 'relative' }} ref={ref}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">What we do</div>
            <h2 className="section-title">
              Everything Zoho. <span className="grad-blue-red">One team.</span> One contract.
            </h2>
            <p className="section-sub">
              ZoFlowX is a leading Zoho Consulting Partner that handles every Zoho need under one roof — from setup to maintenance. Pick what you need. Pay only for that.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
            <a href="#consultation" className="link-reveal">
              Tell us what you need <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} color={PALETTE[i % 3]} delay={i * 0.05} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="fade-up" style={{
          background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
          borderRadius: 24, padding: '46px 40px', marginTop: 56,
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.22 }} className="dot-grid-light" />
          <div aria-hidden style={{
            position: 'absolute', top: '-40%', right: '-10%', width: 420, height: 420,
            background: 'radial-gradient(circle, rgba(220,38,38,0.30), transparent 65%)', filter: 'blur(40px)',
          }} />
          <div aria-hidden style={{
            position: 'absolute', bottom: '-40%', left: '-10%', width: 380, height: 380,
            background: 'radial-gradient(circle, rgba(245,158,11,0.22), transparent 65%)', filter: 'blur(40px)',
          }} />
          <div className="row align-items-center position-relative g-4">
            <div className="col-lg-8">
              <div style={{
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2.5px',
                textTransform: 'uppercase', color: '#f59e0b', marginBottom: 12,
              }}>One team. All the skills.</div>
              <h3 style={{
                color: '#fff', fontFamily: 'Plus Jakarta Sans,sans-serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: 8,
                lineHeight: 1.2, letterSpacing: '-0.018em',
              }}>
                Consultant + developer + PM + support, all in one engagement.
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.72)', fontSize: '0.96rem',
                marginBottom: 0, fontFamily: 'Inter,sans-serif',
              }}>
                Need 10 hours this month and 40 next? That&apos;s fine. Our managed services scale with your real workload — no retainer waste.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#consultation" className="btn-accent ahover">
                Get a Custom Quote <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
