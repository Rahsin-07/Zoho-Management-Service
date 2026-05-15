'use client'
import { useEffect, useRef } from 'react'

const options = [
  {
    icon: 'bi-calendar-event',
    color: '#f59e0b',
    title: 'Book a free strategy call',
    sub: '30 mins · Zoho Bookings',
    href: 'https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation',
  },
  {
    icon: 'bi-file-earmark-text',
    color: '#2563eb',
    title: 'Get a written Zoho audit',
    sub: 'Sent to your inbox · No call needed',
    href: 'mailto:info@zoflowx.com?subject=Send%20me%20a%20Zoho%20managed%20services%20audit',
  },
  {
    icon: 'bi-telephone',
    color: '#dc2626',
    title: 'Talk to a senior consultant',
    sub: 'Mon–Fri, 10am–7pm IST',
    href: 'tel:+918190009222',
  },
]

const pillars = [
  {
    icon: 'bi-shield-check',
    title: '100% free — no obligation',
    desc: 'No credit card. No follow-up spam. No "sign up to see pricing".',
  },
  {
    icon: 'bi-person-badge',
    title: 'Senior consultant, not an SDR',
    desc: 'You talk to someone who can actually fix things — from day one.',
  },
  {
    icon: 'bi-journal-text',
    title: 'Written summary, yours to keep',
    desc: 'Even if you don\'t hire us, you walk away with a clear next-step doc.',
  },
]

export default function Consultation() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="consultation"
      style={{
        background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      ref={ref}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 22% 28%, rgba(99,179,237,0.20) 0%, transparent 55%), radial-gradient(ellipse at 82% 78%, rgba(245,158,11,0.16) 0%, transparent 50%), radial-gradient(ellipse at 78% 18%, rgba(220,38,38,0.14) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.22 }} className="grid-pattern-light" />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* LEFT */}
          <div className="col-lg-6 fade-up">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '2.8px',
                textTransform: 'uppercase',
                color: '#f59e0b',
                marginBottom: 16,
              }}
            >
              <span style={{ width: 28, height: 2, background: 'currentColor', borderRadius: 2 }} />
              Let's Talk
            </span>

            <h2
              style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif',
                fontSize: 'clamp(2rem, 4.2vw, 3.1rem)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: 20,
                letterSpacing: '-0.022em',
                lineHeight: 1.1,
              }}
            >
              Stop losing time to Zoho.{' '}
              <span
                style={{
                  background: 'linear-gradient(95deg, #93c5fd, #fca5a5, #fcd34d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Start running it like a pro
              </span>
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.74)',
                fontSize: '1.04rem',
                marginBottom: 34,
                lineHeight: 1.75,
                maxWidth: 540,
                fontFamily: 'Inter,sans-serif',
              }}
            >
              Book a free 30-minute call with a senior ZoFlowX consultant. We'll look at where your Zoho setup is today, where it's costing you money, and what fixing it actually looks like.{' '}
              <strong style={{ color: '#fff' }}>No sales pitch. No commitment. Just clarity.</strong>
            </p>

            {/* Three pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    padding: '14px 18px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 14,
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      minWidth: 38,
                      borderRadius: 10,
                      background: ['rgba(37,99,235,0.18)', 'rgba(220,38,38,0.18)', 'rgba(245,158,11,0.2)'][i],
                      color: ['#93c5fd', '#fca5a5', '#fcd34d'][i],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.05rem',
                      flexShrink: 0,
                    }}
                  >
                    <i className={`bi ${p.icon}`} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Plus Jakarta Sans,sans-serif',
                        fontWeight: 800,
                        color: '#fff',
                        fontSize: '0.94rem',
                        marginBottom: 2,
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: '0.82rem',
                        color: 'rgba(255,255,255,0.65)',
                        fontFamily: 'Inter,sans-serif',
                        lineHeight: 1.5,
                      }}
                    >
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '18px 22px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14,
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'var(--grad-tri)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontWeight: 800,
                  color: '#fff',
                  fontSize: '1.05rem',
                  flexShrink: 0,
                  boxShadow: '0 8px 26px rgba(220,38,38,0.4)',
                }}
              >
                AR
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif',
                    fontWeight: 800,
                    color: '#fff',
                    fontSize: '0.95rem',
                  }}
                >
                  Arul Raj
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.55)',
                    marginTop: 2,
                    fontFamily: 'Inter,sans-serif',
                  }}
                >
                  Founder · 13+ years on Zoho · Ex-Oracle, Ex-Infosys
                </div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.7)',
                    marginTop: 6,
                    fontStyle: 'italic',
                    fontFamily: 'Inter,sans-serif',
                  }}
                >
                  "I personally take every first call. No SDRs, no scripts."
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Pick a way to start */}
          <div className="col-lg-6 fade-up" style={{ transitionDelay: '0.15s' }}>
            <div
              style={{
                background: '#f6f1ea',
                borderRadius: 26,
                padding: '40px 36px',
                boxShadow: '0 36px 90px rgba(0,0,0,0.4)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 6,
                  background: 'var(--grad-tri)',
                }}
              />
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(220,38,38,0.16), transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  bottom: -60,
                  left: -60,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(245,158,11,0.14), transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative' }}>
                <h3
                  style={{
                    fontFamily: 'Plus Jakarta Sans,sans-serif',
                    fontSize: '1.55rem',
                    fontWeight: 800,
                    color: '#0b1220',
                    marginBottom: 6,
                    letterSpacing: '-0.015em',
                  }}
                >
                  Pick a way to start
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#64748b',
                    marginBottom: 28,
                    fontFamily: 'Inter,sans-serif',
                  }}
                >
                  Same-day reply, every time.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {options.map((opt, i) => (
                    <a
                      key={i}
                      href={opt.href}
                      target={opt.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                        padding: '18px 20px',
                        background: '#fff',
                        border: '1px solid #e8e3dc',
                        borderRadius: 14,
                        textDecoration: 'none',
                        transition: 'all 0.3s cubic-bezier(.2,.7,.2,1)',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = opt.color
                        e.currentTarget.style.transform = 'translateY(-3px)'
                        e.currentTarget.style.boxShadow = `0 14px 36px ${opt.color}26`
                        e.currentTarget.querySelector('.opt-arrow').style.color = opt.color
                        e.currentTarget.querySelector('.opt-arrow').style.transform = 'translateX(5px)'
                        e.currentTarget.querySelector('.opt-icon').style.background = opt.color
                        e.currentTarget.querySelector('.opt-icon').style.color = '#fff'
                        e.currentTarget.querySelector('.opt-icon').style.transform = 'rotate(-5deg) scale(1.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#e8e3dc'
                        e.currentTarget.style.transform = ''
                        e.currentTarget.style.boxShadow = 'none'
                        e.currentTarget.querySelector('.opt-arrow').style.color = '#94a3b8'
                        e.currentTarget.querySelector('.opt-arrow').style.transform = ''
                        e.currentTarget.querySelector('.opt-icon').style.background = `${opt.color}15`
                        e.currentTarget.querySelector('.opt-icon').style.color = opt.color
                        e.currentTarget.querySelector('.opt-icon').style.transform = ''
                      }}
                    >
                      <div
                        className="opt-icon"
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 12,
                          background: `${opt.color}15`,
                          color: opt.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.3s',
                        }}
                      >
                        <i className={`bi ${opt.icon}`} style={{ fontSize: '1.25rem' }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontFamily: 'Plus Jakarta Sans,sans-serif',
                            fontWeight: 800,
                            fontSize: '0.94rem',
                            color: '#0b1220',
                            marginBottom: 3,
                          }}
                        >
                          {opt.title}
                        </div>
                        <div
                          style={{
                            fontFamily: 'Inter,sans-serif',
                            fontSize: '0.78rem',
                            color: '#64748b',
                          }}
                        >
                          {opt.sub}
                        </div>
                      </div>
                      <i
                        className="bi bi-arrow-right opt-arrow"
                        style={{
                          fontSize: '1rem',
                          color: '#94a3b8',
                          transition: 'all 0.3s',
                          flexShrink: 0,
                        }}
                      />
                    </a>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 24,
                    padding: '14px 16px',
                    background: 'rgba(37,99,235,0.06)',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <i
                    className="bi bi-shield-check"
                    style={{ color: '#2563eb', fontSize: '1rem', flexShrink: 0 }}
                  />
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#475569',
                      fontFamily: 'Inter,sans-serif',
                    }}
                  >
                    Zoho Authorized Partner · NDA on request · We don't outsource
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
