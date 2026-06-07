'use client'
import { useEffect, useRef, useState } from 'react'

// Section 13, Voices of Our Happy Customers
const testimonials = [
  {
    color: '#2563eb',
    quote: "We run a bike and car accessories shop and were looking for a better way to manage our billing and inventory. A friend suggested this team, and they walked us through Zoho Books and Zoho Inventory in a very simple way. They are one of the best Zoho partners we've come across. No technical terms, just practical solutions. Really happy with the support we received.",
    name: 'Shijith V R', role: 'CEO - Kumari PitShop', initial: 'VR', rating: 5,
  },
  {
    color: '#dc2626',
    quote: "Thanks a ton Mr. Arul & ZoFlowX team!! ZoFlowX sets a benchmark as one of the best Zoho partners in Chennai. Their expertise, strategic approach, and customer-first mindset make them a trusted Zoho consultant in Chennai. They go beyond implementation, offering insights, optimization, and scalable solutions tailored to business growth. For anyone seeking top-tier Zoho consultants in Chennai or a dependable Zoho partner in Chennai, ZoFlowX is an excellent choice.",
    name: 'Sankara Subramanian A', role: 'Founder-TN Spaces', initial: 'SS', rating: 5,
  },
  {
    color: '#f59e0b',
    quote: "We partnered with ZoFlowX at Cflow (Cavintek) for our Zoho CRM implementation, and the experience has been outstanding. The team at ZoFlowX listens, understands your exact requirement, and comes back with a better solution than what you asked for. The entire ZoFlowX team is proactive, reachable in real time, and genuinely invested in making things work. We went live within a week. Post-implementation support has been just as strong. Pricing is fair and transparent. If you're looking for a Zoho implementation partner who treats your business like their own, ZoFlowX is the one.",
    name: 'Kishore PA', role: 'Cflow · Cavintek', initial: 'KP', rating: 5,
  },
]

const RED = '#dc2626'
const PREVIEW_LEN = 165
const preview = (s, n = PREVIEW_LEN) => {
  if (s.length <= n) return s
  const cut = s.slice(0, n)
  return cut.slice(0, cut.lastIndexOf(' ')) + '…'
}

export default function Testimonials() {
  const ref = useRef(null)
  const [active, setActive] = useState(null) // index of open review, or null

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Lock scroll + close on Escape while modal is open
  useEffect(() => {
    if (active === null) return
    const onKey = e => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  const t = active !== null ? testimonials[active] : null

  return (
    <section id="testimonials" ref={ref} style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes zxFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes zxPop { from { opacity: 0; transform: translateY(16px) scale(.96) } to { opacity: 1; transform: translateY(0) scale(1) } }
      `}</style>

      <div aria-hidden style={{
        position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)',
        fontSize: '20rem', fontFamily: 'Inter,sans-serif',
        fontWeight: 900, color: 'rgba(11,18,32,0.025)', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none',
      }}>"</div>

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 800, margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-yellow">Testimonials</span>
          </div>
          <h2 className="section-title">
            Voices of Our <span className="grad-blue-red">Happy Customers</span>
          </h2>
          <p className="section-sub mx-auto">
            Genuine results shared by real businesses, discover why companies across India consistently choose ZoFlowX as their authorized Zoho Partner.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`col-md-6 col-lg-4 fade-up ${['zx-sl','zx-su','zx-sr'][i % 3]}`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setActive(i)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i) } }}
                style={{
                  background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
                  padding: '34px 28px 28px', height: '100%', cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                  position: 'relative', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 30px 70px ${t.color}24`
                  el.style.borderColor = t.color
                  el.querySelector('.t-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.t-quote').style.opacity = '1'
                  el.querySelector('.t-avatar').style.transform = 'scale(1.04)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.t-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.t-quote').style.opacity = '0.18'
                  el.querySelector('.t-avatar').style.transform = ''
                }}
              >
                <div className="t-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: t.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.45s ease-out',
                }} />

                <i className="bi bi-quote t-quote" style={{
                  position: 'absolute', top: 14, right: 18, fontSize: '4rem',
                  color: t.color, opacity: 0.18, lineHeight: 1,
                  transition: 'opacity 0.4s',
                }} />

                <div style={{ display: 'flex', gap: 4, marginBottom: 16, position: 'relative', zIndex: 1 }}>
                  {[...Array(t.rating)].map((_, si) => (
                    <i key={si} className="bi bi-star-fill" style={{ color: '#f59e0b', fontSize: '0.92rem' }} />
                  ))}
                </div>

                <p style={{
                  fontSize: '0.95rem', color: '#0b1220', lineHeight: 1.72,
                  fontFamily: 'Inter,sans-serif', fontStyle: 'italic',
                  marginBottom: 16, position: 'relative', zIndex: 1, flex: 1,
                }}>"{preview(t.quote)}"</p>

                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: RED, fontFamily: 'Inter,sans-serif', fontWeight: 700,
                  fontSize: '0.85rem', marginBottom: 20, position: 'relative', zIndex: 1,
                }}>
                  Read full review <i className="bi bi-arrow-right" />
                </span>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  paddingTop: 18, borderTop: '1px solid #f0ece6',
                }}>
                  <div className="t-avatar" style={{
                    width: 46, height: 46, borderRadius: '50%',
                    background: t.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Inter,sans-serif', fontWeight: 800,
                    fontSize: '0.88rem', flexShrink: 0,
                    boxShadow: `0 6px 16px ${t.color}40`,
                    transition: 'transform 0.4s cubic-bezier(.2,.7,.2,1)',
                  }}>{t.initial}</div>
                  <div>
                    <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: '0.92rem', color: '#0b1220' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'Inter,sans-serif', marginTop: 1 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-up text-center" style={{ marginTop: 56 }}>
          <p style={{ color: '#475569', fontFamily: 'Inter,sans-serif', fontSize: '0.96rem', marginBottom: 18 }}>
            Want to be our next success story?
          </p>
          
          <a
            href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation"
            target="_blank" rel="noreferrer"
            className="btn-primary-custom ahover"
            style={{ background: RED, borderColor: RED, boxShadow: `0 10px 30px ${RED}40` }}
          >
            Tell Us About Your Project <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>

      {/* Full review modal with blurred backdrop */}
      {t && (
        <div
          onClick={e => { if (e.target === e.currentTarget) setActive(null) }}
          style={{
            position: 'fixed', inset: 0, zIndex: 1050,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
            background: 'rgba(11,18,32,0.45)',
            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
            animation: 'zxFadeIn 0.25s ease-out',
          }}
        >
          <div style={{
            background: '#fff', borderRadius: 24, maxWidth: 640, width: '100%',
            maxHeight: '85vh', overflowY: 'auto', position: 'relative',
            padding: '40px 38px 34px',
            borderTop: `4px solid ${t.color}`,
            boxShadow: '0 40px 120px rgba(11,18,32,0.35)',
            animation: 'zxPop 0.3s cubic-bezier(.2,.7,.2,1)',
          }}>
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              style={{
                position: 'absolute', top: 16, right: 16,
                width: 38, height: 38, borderRadius: '50%', border: 'none',
                background: '#f4f1ec', color: '#0b1220', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f4f1ec'; e.currentTarget.style.color = '#0b1220' }}
            >
              <i className="bi bi-x-lg" style={{ fontSize: '0.95rem' }} />
            </button>

            <i className="bi bi-quote" style={{
              fontSize: '3.4rem', color: t.color, opacity: 0.2, lineHeight: 1, display: 'block', marginBottom: 4,
            }} />

            <div style={{ display: 'flex', gap: 4, marginBottom: 18 }}>
              {[...Array(t.rating)].map((_, si) => (
                <i key={si} className="bi bi-star-fill" style={{ color: '#f59e0b', fontSize: '1rem' }} />
              ))}
            </div>

            <p style={{
              fontSize: '1.05rem', color: '#0b1220', lineHeight: 1.8,
              fontFamily: 'Inter,sans-serif', fontStyle: 'italic', marginBottom: 28,
            }}>"{t.quote}"</p>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 16,
              paddingTop: 20, borderTop: '1px solid #f0ece6',
            }}>
              <div style={{
                width: 54, height: 54, borderRadius: '50%',
                background: t.color, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Inter,sans-serif', fontWeight: 800,
                fontSize: '1rem', flexShrink: 0,
                boxShadow: `0 6px 16px ${t.color}40`,
              }}>{t.initial}</div>
              <div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontWeight: 800, fontSize: '1rem', color: '#0b1220' }}>{t.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#64748b', fontFamily: 'Inter,sans-serif', marginTop: 2 }}>{t.role}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
