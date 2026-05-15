'use client'
import { useEffect, useRef } from 'react'

// Section 04 — Why ZoFlowX (6 reasons from brief)
const reasons = [
  {
    num: '01', icon: 'bi-patch-check-fill', color: '#2563eb',
    title: 'Zoho Authorized Partner',
    desc: "We're an official Zoho Authorized Partner with certified consultants and developers on staff — not a freelancer pretending to be an agency.",
  },
  {
    num: '02', icon: 'bi-people-fill', color: '#dc2626',
    title: 'One team, all the skills',
    desc: 'Consultant, developer, project manager and support engineer — all under one roof. No more chasing five different freelancers.',
  },
  {
    num: '03', icon: 'bi-graph-up', color: '#f59e0b',
    title: 'Pay only for what you use',
    desc: 'Need 10 hours this month and 40 next? That works. Our managed services scale up or down with your actual workload — no retainer waste.',
  },
  {
    num: '04', icon: 'bi-telephone-inbound', color: '#2563eb',
    title: 'We pick up the phone',
    desc: 'Support tickets are answered by a human, fast. Most are resolved within 48 hours. Critical issues get same-day attention.',
  },
  {
    num: '05', icon: 'bi-file-earmark-text', color: '#dc2626',
    title: 'We document everything',
    desc: 'All workflows, custom fields, and integrations — documented in plain language. Even if you switch providers later, you stay un-locked-in.',
  },
  {
    num: '06', icon: 'bi-chat-square-text', color: '#f59e0b',
    title: 'We speak your language',
    desc: 'No jargon. No condescending tech-speak. We explain what we&apos;re doing in a way that both your sales manager and your CFO understand.',
  },
]

export default function WhyUs() {
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
    <section id="why-us" style={{
      background: '#fff', position: 'relative', overflow: 'hidden',
    }} ref={ref}>
      <div aria-hidden style={{
        position: 'absolute', top: '-10%', left: '-5%', width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '-10%', right: '-5%', width: 460, height: 460,
        background: 'radial-gradient(circle, rgba(245,158,11,0.07), transparent 65%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 780, margin: '0 auto 64px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-blue">Why ZoFlowX</span>
          </div>
          <h2 className="section-title">
            We&apos;re not the easiest choice. <span className="grad-red-yellow">We&apos;re the right one.</span>
          </h2>
          <p className="section-sub mx-auto">
            Six reasons clients keep us on the books — and refer their friends.
          </p>
        </div>

        <div className="row g-4">
          {reasons.map((r, i) => (
            <div key={r.num} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="why-card" style={{
                position: 'relative', padding: '32px 28px',
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 20,
                height: '100%', transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                overflow: 'hidden', cursor: 'default',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 24px 60px ${r.color}1f`
                  el.style.borderColor = r.color
                  el.querySelector('.why-bg').style.opacity = '1'
                  el.querySelector('.why-icon').style.transform = 'scale(1.06) rotate(-4deg)'
                  el.querySelector('.why-icon').style.background = r.color
                  el.querySelector('.why-icon').style.color = '#fff'
                  el.querySelector('.why-corner').style.opacity = '1'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.why-bg').style.opacity = '0'
                  el.querySelector('.why-icon').style.transform = ''
                  el.querySelector('.why-icon').style.background = `${r.color}15`
                  el.querySelector('.why-icon').style.color = r.color
                  el.querySelector('.why-corner').style.opacity = '0'
                }}
              >
                <div className="why-bg" aria-hidden style={{
                  position: 'absolute', inset: 0, opacity: 0,
                  background: `linear-gradient(135deg, ${r.color}06, transparent 55%)`,
                  transition: 'opacity 0.4s',
                }} />
                <div className="why-corner" aria-hidden style={{
                  position: 'absolute', top: 16, right: 16, fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1.8,
                  color: r.color, opacity: 0, transition: 'opacity 0.36s',
                }}>{r.num}</div>

                <div className="why-icon" style={{
                  width: 56, height: 56, borderRadius: 14, marginBottom: 22,
                  background: `${r.color}15`, color: r.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  position: 'relative', zIndex: 1,
                }}>
                  <i className={`bi ${r.icon}`} />
                </div>

                <h3 style={{
                  fontSize: '1.16rem', fontWeight: 800,
                  marginBottom: 10, color: '#0b1220',
                  fontFamily: 'Plus Jakarta Sans,sans-serif', lineHeight: 1.3,
                  letterSpacing: '-0.012em', position: 'relative', zIndex: 1,
                }}>{r.title}</h3>

                <p style={{
                  fontSize: '0.94rem', color: '#64748b', lineHeight: 1.72,
                  marginBottom: 0, fontFamily: 'Inter,sans-serif',
                  position: 'relative', zIndex: 1,
                }} dangerouslySetInnerHTML={{ __html: r.desc }} />
              </div>
            </div>
          ))}
        </div>

        {/* Small CTA strip */}
        <div className="fade-up text-center" style={{ marginTop: 56 }}>
          <p style={{
            fontSize: '0.98rem', color: '#475569',
            fontFamily: 'Inter,sans-serif', marginBottom: 18,
          }}>
            Want to see what working with a real Zoho Implementation Partner feels like?
          </p>
          <a href="#consultation" className="btn-primary-custom ahover">
            Schedule My 30-Min Call <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  )
}
