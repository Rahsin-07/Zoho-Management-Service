'use client'
import { useEffect, useRef } from 'react'

// Section 01 — Zoho Managed Services hero
// Stats from brief: 14+ years, 65% savings, 24h response, 20+ industries

const stats = [
  { num: 14, suffix: '+',     label: 'Years of hands-on Zoho experience', color: '#2563eb' },
  { num: 65, suffix: '%',     label: 'Average savings vs in-house Zoho team', color: '#dc2626' },
  { num: 24, suffix: 'h',     label: 'Typical response time on support tickets', color: '#f59e0b' },
  { num: 20, suffix: '+',     label: 'Industries served across India & USA', color: '#0b1220' },
]

// Floating module chips — Zoho One products we manage
const moduleChips = [
  { label: 'Zoho CRM',       icon: 'bi-people-fill',        x: '3%',  y: '12%', delay: 0,    color: '#2563eb' },
  { label: 'Zoho Books',     icon: 'bi-journal-text',       x: '83%', y: '10%', delay: 0.4,  color: '#dc2626' },
  { label: 'Zoho Desk',      icon: 'bi-headset',            x: '2%',  y: '56%', delay: 0.8,  color: '#f59e0b' },
  { label: 'Zoho Creator',   icon: 'bi-app-indicator',      x: '85%', y: '54%', delay: 0.2,  color: '#2563eb' },
  { label: 'Zoho Analytics', icon: 'bi-bar-chart-line',     x: '14%', y: '80%', delay: 0.6,  color: '#dc2626' },
  { label: 'Zoho Recruit',   icon: 'bi-briefcase',          x: '76%', y: '80%', delay: 1.0,  color: '#f59e0b' },
  { label: 'Zoho Inventory', icon: 'bi-box-seam',           x: '90%', y: '32%', delay: 1.2,  color: '#2563eb' },
  { label: 'Zoho People',    icon: 'bi-person-badge',       x: '1%',  y: '34%', delay: 1.4,  color: '#dc2626' },
]

export default function Hero() {
  const statsRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        statsRef.current?.querySelectorAll('.stat-num').forEach(el => {
          const target = parseInt(el.dataset.target)
          const suffix = el.dataset.suffix
          let start = 0
          const step = Math.max(1, Math.ceil(target / 40))
          const timer = setInterval(() => {
            start = Math.min(start + step, target)
            el.textContent = start + suffix
            if (start >= target) clearInterval(timer)
          }, 28)
        })
      }
    }, { threshold: 0.4 })
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" style={{
      background: 'linear-gradient(160deg, #fafaf7 0%, #f0ece5 100%)',
      padding: '110px 0 90px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Tri-color gradient blobs */}
      <div aria-hidden style={{ position: 'absolute', width: 540, height: 540, top: -200, left: -140, background: 'radial-gradient(circle at center, rgba(37,99,235,0.20), transparent 60%)', animation: 'blob-drift 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 580, height: 580, bottom: -240, right: -180, background: 'radial-gradient(circle at center, rgba(245,158,11,0.18), transparent 60%)', animation: 'blob-drift 18s ease-in-out infinite reverse', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 420, height: 420, top: '30%', right: '20%', background: 'radial-gradient(circle at center, rgba(220,38,38,0.12), transparent 60%)', animation: 'blob-drift 22s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.45 }} className="dot-grid" />

      {/* Floating module chips */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {moduleChips.map((c, i) => (
          <div key={c.label}
            className="d-none d-md-inline-flex"
            style={{
              position: 'absolute', left: c.x, top: c.y,
              background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(8px)',
              border: '1px solid #e8e3dc', borderRadius: 999, padding: '7px 14px',
              fontSize: '0.78rem', fontFamily: 'Inter,sans-serif', fontWeight: 600,
              color: '#334155', boxShadow: '0 10px 28px rgba(11,18,32,0.08)',
              alignItems: 'center', gap: 8,
              animation: `float-y ${5 + (i % 3) * 1.2}s ease-in-out ${c.delay}s infinite`,
              whiteSpace: 'nowrap',
            }}>
            <i className={`bi ${c.icon}`} style={{ color: c.color, fontSize: '0.95rem' }} />
            {c.label}
          </div>
        ))}
      </div>

      <div className="container position-relative text-center" style={{ zIndex: 2 }}>
        {/* Badge */}
        <div style={{ marginBottom: 30, display: 'flex', justifyContent: 'center' }}>
          <div className="pill">
            <span className="pill-dot" />
            <span>Zoho Managed Services · India + USA</span>
            <span style={{ width: 1, height: 14, background: '#e8e3dc' }} />
            <span style={{ color: '#2563eb', fontWeight: 700 }}>
              <i className="bi bi-patch-check-fill" /> Authorized
            </span>
          </div>
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'Plus Jakarta Sans,sans-serif',
          fontSize: 'clamp(2.3rem, 5.6vw, 4.15rem)',
          fontWeight: 800, color: '#0b1220',
          marginBottom: 24, letterSpacing: '-0.028em', lineHeight: 1.05,
          maxWidth: 1000, margin: '0 auto 24px',
        }}>
          <span className="grad-blue-red">Zoho Managed Services</span><br />
          that <span className="grad-red-yellow">actually get run</span>
        </h1>

        <p style={{
          fontSize: '1.13rem', color: '#475569', maxWidth: 720,
          margin: '0 auto 36px', lineHeight: 1.75, fontFamily: 'Inter,sans-serif',
        }}>
          ZoFlowX is your end-to-end Zoho Managed Services partner. We set it up, fix what&apos;s broken, build what&apos;s missing, and <strong style={{ color: '#0b1220' }}>run it for you</strong> — so you stop wrestling with software and get back to growing the business.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 64 }}>
          <a href="#consultation" className="btn-gradient ahover" style={{ padding: '0.94rem 2rem', fontSize: '0.95rem' }}>
            Book Your Free Zoho Audit <i className="bi bi-arrow-right" />
          </a>
          <a href="#services"
            style={{
              background: '#fff', color: '#0b1220', border: '2px solid #e8e3dc',
              borderRadius: 12, padding: '0.86rem 1.9rem',
              fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 700, fontSize: '0.95rem',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'all 0.28s cubic-bezier(.2,.7,.2,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#0b1220'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 32px rgba(11,18,32,0.10)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dc'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none' }}
          >
            See What We Do <i className="bi bi-grid-3x3-gap" />
          </a>
        </div>

        {/* Stats — premium glass card with tri-color top bar */}
        <div ref={statsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 0,
          padding: '40px 28px', background: '#fff',
          border: '1px solid #e8e3dc', borderRadius: 26, maxWidth: 980, margin: '0 auto',
          boxShadow: '0 32px 80px rgba(11,18,32,0.10), 0 1px 0 rgba(255,255,255,0.6) inset',
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            background: 'var(--grad-tri)',
          }} />
          {stats.map((s, i) => (
            <div key={s.label} style={{
              textAlign: 'center', padding: '10px 14px',
              borderRight: i < stats.length - 1 ? '1px solid #e8e3dc' : 'none',
            }}>
              <div className="stat-num"
                data-target={s.num} data-suffix={s.suffix}
                style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                  fontWeight: 800,
                  background: 'var(--grad-tri)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', lineHeight: 1,
                }}>
                {`0${s.suffix}`}
              </div>
              <div style={{
                fontSize: '0.82rem', color: '#64748b', marginTop: 10,
                fontFamily: 'Inter,sans-serif', lineHeight: 1.4,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
