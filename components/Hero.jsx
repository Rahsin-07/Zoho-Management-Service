'use client'
import { useEffect, useRef } from 'react'

// Section 01, Zoho Managed Services hero
// Stats from brief: 14+ years, 65% savings, 24h response, 20+ industries

const stats = [
  { num: 14, suffix: '+',     label: 'Years of hands-on Zoho experience', color: '#2563eb' },
  { num: 65, suffix: '%',     label: 'Average savings vs in-house Zoho team', color: '#dc2626' },
  { num: 24, suffix: 'h',     label: 'Typical response time on support tickets', color: '#f59e0b' },
  { num: 20, suffix: '+',     label: 'Industries Served', color: '#0b1220' },
]

// Floating module chips, Zoho One products we manage
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

// Review avatars, ZoFlowX tri-color
const reviewers = [
  { initials: 'SV', bg: '#266EB3' },
  { initials: 'SS', bg: '#DF3A3C' },
  { initials: 'KP', bg: '#F8B222' },
]

// Contact action buttons. UPDATE the hrefs below with real numbers/handles.
const contactButtons = [
  { label: 'Call',      icon: 'bi-telephone',       href: 'tel:+91819000222',                                  variant: 'default' },
  { label: 'WhatsApp',  icon: 'bi-whatsapp',        href: 'https://wa.me/918190009222',                         variant: 'whatsapp' },
  { label: 'Email',     icon: 'bi-envelope',        href: 'mailto:info@zoflowx.com',                           variant: 'default' },
  { label: 'Schedule',  icon: 'bi-calendar-check',  href: 'https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation', variant: 'default' },
  { label: 'Live Chat', icon: 'bi-chat-dots',       href: '#',                                                  variant: 'default' },
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
      // Warm gradient sampled from reference: white -> cream-yellow -> peach
      background: 'linear-gradient(135deg, #ffffff 0%, #fdfbe9 32%, #fdeedd 66%, #fce3d6 100%)',
      padding: '110px 0 90px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Tri-color gradient blobs, softened so the warm base reads through */}
      <div aria-hidden style={{ position: 'absolute', width: 540, height: 540, top: -200, left: -140, background: 'radial-gradient(circle at center, rgba(37,99,235,0.12), transparent 60%)', animation: 'blob-drift 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 580, height: 580, bottom: -240, right: -180, background: 'radial-gradient(circle at center, rgba(248,178,34,0.18), transparent 60%)', animation: 'blob-drift 18s ease-in-out infinite reverse', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 420, height: 420, top: '30%', right: '20%', background: 'radial-gradient(circle at center, rgba(223,58,60,0.10), transparent 60%)', animation: 'blob-drift 22s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.35 }} className="dot-grid" />

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
  fontFamily: 'Inter,sans-serif',
  fontSize: "48px",                 // was clamp(... 4.15rem)
  fontWeight: 700,              // was 800
  color: '#0b1220',
  letterSpacing: '-0.028em',
  lineHeight: 1.2,              // was 1.05 — tight line-height was clipping the gradient text
  padding: '0.08em 0',          // safety margin so WebKit clip doesn't shave the caps
  maxWidth: 1000,
  margin: '0 auto 24px',
}}>
  <span className="grad-blue-red">Zoho Managed</span> <span className="grad-blue-red">Services</span>
</h1>

        <p style={{
          fontSize: '1.13rem', color: '#475569', maxWidth: 720,
          margin: '0 auto 36px', lineHeight: 1.75, fontFamily: 'Inter,sans-serif',
        }}>
          ZoFlowX is your end-to-end Zoho Managed Services partner. We set it up, fix what&apos;s broken, build what&apos;s missing, and <strong style={{ color: '#0b1220' }}>run it for you</strong>, so you stop wrestling with software and get back to growing the business.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
          <a href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation" target="_blank" rel="noreferrer"
            style={{
              background: '#DF3A3C', color: '#fff', border: 'none',
              borderRadius: 12, padding: '0.94rem 2rem', fontSize: '0.95rem',
              fontFamily: 'Inter,sans-serif', fontWeight: 700,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              boxShadow: '0 14px 32px rgba(223,58,60,0.32)',
              transition: 'all 0.28s cubic-bezier(.2,.7,.2,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#c92f31'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 18px 40px rgba(223,58,60,0.40)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#DF3A3C'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 14px 32px rgba(223,58,60,0.32)' }}
          >
            Book Your Free Zoho Audit <i className="bi bi-arrow-right" />
          </a>
          <a href="#services"
            style={{
              background: '#fff', color: '#0b1220', border: '2px solid #e8e3dc',
              borderRadius: 12, padding: '0.86rem 1.9rem',
              fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '0.95rem',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'all 0.28s cubic-bezier(.2,.7,.2,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#0b1220'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 32px rgba(11,18,32,0.10)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e3dc'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none' }}
          >
            See What We Do <i className="bi bi-grid-3x3-gap" />
          </a>
        </div>

        {/* Reviews row, avatar stack + stars + rating */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 14, flexWrap: 'wrap', marginBottom: 26,
        }}>
          <div style={{ display: 'flex' }}>
            {reviewers.map((r, i) => (
              <div key={r.initials} style={{
                width: 38, height: 38, borderRadius: '50%', background: r.bg,
                color: '#fff', fontFamily: 'Inter,sans-serif', fontWeight: 700,
                fontSize: '0.72rem', display: 'flex', alignItems: 'center',
                justifyContent: 'center', border: '2.5px solid #fff',
                marginLeft: i === 0 ? 0 : -12, position: 'relative',
                zIndex: reviewers.length - i,
                boxShadow: '0 4px 12px rgba(11,18,32,0.12)',
              }}>{r.initials}</div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ display: 'inline-flex', gap: 2, color: '#f59e0b', fontSize: '1.02rem' }}>
              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
            </span>
            <span style={{ fontFamily: 'Inter,sans-serif', fontWeight: 700, color: '#0b1220', fontSize: '1rem' }}>5.0/5</span>
          </div>
        </div>

        {/* Contact action buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 64 }}>
          {contactButtons.map(b => {
            const isWa = b.variant === 'whatsapp'
            return (
              <a key={b.label} href={b.href}
                target={b.href.startsWith('http') ? '_blank' : undefined}
                rel={b.href.startsWith('http') ? 'noreferrer' : undefined}
                style={{
                  background: '#fff',
                  color: isWa ? '#1f9d55' : '#0b1220',
                  border: `1.5px solid ${isWa ? '#bfe6cd' : '#e8e3dc'}`,
                  borderRadius: 12, padding: '0.62rem 1.15rem',
                  fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: '0.9rem',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                  transition: 'all 0.25s cubic-bezier(.2,.7,.2,1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.borderColor = isWa ? '#1f9d55' : '#0b1220'
                  e.currentTarget.style.boxShadow = '0 12px 26px rgba(11,18,32,0.10)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.borderColor = isWa ? '#bfe6cd' : '#e8e3dc'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <i className={`bi ${b.icon}`} style={{ fontSize: '0.95rem' }} />
                {b.label}
              </a>
            )
          })}
        </div>

        {/* Stats, premium glass card with tri-color top bar */}
        <div ref={statsRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 0,
          padding: '26px 28px', background: '#fff',
          border: '1px solid #e8e3dc', borderRadius: 26, maxWidth: 1140, margin: '0 auto',
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
                  fontFamily: 'Inter,sans-serif',
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
