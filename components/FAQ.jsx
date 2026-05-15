'use client'
import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    q: 'What makes ZoFlowX different from other Zoho partners?',
    a: "Most Zoho partners are either large agencies (slow and costly) or freelancers (overworked and not scalable). ZoFlowX is in the middle — a small, senior team that works quickly, keeps records, and only bills for work completed. Not a reseller, we are a Zoho Authorized Partner with hands-on experience in hundreds of implementations.",
  },
  {
    q: 'Is ZoFlowX a Zoho Authorized Partner?',
    a: "Yes. ZoFlowX is an officially recognized Zoho Authorized Partner with certified consultants on the team. This means we have direct access to Zoho, access to new features before they're released to the public, and can escalate issues for you — which a freelancer can't.",
  },
  {
    q: "Can ZoFlowX fix a Zoho setup that's already a mess?",
    a: "That's actually most of our work. About 60% of our new ZoFlowX clients come to us because of a poor previous implementation. We start with an audit (typically 1–2 weeks), give you a written report of what's broken, and then fix it module by module — or rebuild it from scratch — whichever is cheaper for you in the long run.",
  },
  {
    q: 'Does ZoFlowX work with all Zoho products?',
    a: "Yes. The ZoFlowX team operates across the full Zoho One suite — Zoho CRM, Zoho Books, Zoho Desk, Zoho Recruit, Zoho People, Zoho Inventory, Zoho Creator, Zoho Analytics, Zoho Campaigns and more. If it's a Zoho product, we've likely implemented it.",
  },
  {
    q: 'Can ZoFlowX migrate us from Salesforce or HubSpot to Zoho?',
    a: 'Yes. ZoFlowX is a leading Zoho Consulting Partner with dozens of Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, Insightly, Freshsales and Excel migrations under our belt. We handle data mapping, data cleaning, custom field conversion, history preservation, and user training. Most migrations complete in 2–4 weeks with zero downtime.',
  },
  {
    q: 'How quickly can ZoFlowX start?',
    a: "We typically begin auditing and consulting within 1–3 days of signing. For full implementation projects, kickoff is usually within 2 weeks. If you have an emergency — a broken workflow, a failed integration, a missed renewal — contact us anyway. We hold capacity for emergencies.",
  },
  {
    q: 'What size businesses does ZoFlowX work with?',
    a: "From 5-person startups to 500-person mid-market companies. Smaller teams use us for setup and basic automation. Larger teams use us as their fractional Zoho department. We don't take on enterprise giants with 5,000+ users — they're better served by tier-1 system integrators.",
  },
  {
    q: 'Will ZoFlowX train our team on Zoho?',
    a: "Always. Every ZoFlowX engagement comes with user training — live sessions, recorded walkthroughs, and a custom playbook for your team. The goal is to let your people handle the daily routine so we can stay focused on the harder, higher-leverage work.",
  },
]

const relatedPages = [
  { label: 'Zoho Customization Services', href: '#' },
  { label: 'Hire Zoho Developer', href: '#' },
  { label: 'Zoho Solutions', href: '#' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
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
    <section id="faq" style={{ background: '#fff' }} ref={ref}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 780, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Common questions</span>
          </div>
          <h2 className="section-title">
            Things people ask before <span className="grad-blue-red">working with ZoFlowX</span>
          </h2>
          <p className="section-sub mx-auto">
            Don't see your question? Drop it in the form above — we usually reply the same day.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="fade-up">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <div
                    key={i}
                    style={{
                      border: `1px solid ${isOpen ? '#2563eb' : '#e8e3dc'}`,
                      borderRadius: 16,
                      marginBottom: 12,
                      overflow: 'hidden',
                      background: '#fff',
                      boxShadow: isOpen ? '0 14px 38px rgba(37,99,235,0.10)' : 'none',
                      transition: 'all 0.3s',
                    }}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'transparent',
                        border: 'none',
                        padding: '22px 26px',
                        fontFamily: 'Plus Jakarta Sans,sans-serif',
                        fontWeight: 700,
                        fontSize: '0.98rem',
                        color: isOpen ? '#2563eb' : '#0b1220',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 16,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        if (!isOpen) e.currentTarget.style.color = '#2563eb'
                      }}
                      onMouseLeave={(e) => {
                        if (!isOpen) e.currentTarget.style.color = '#0b1220'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
                        <span
                          style={{
                            fontFamily: 'Plus Jakarta Sans,sans-serif',
                            fontSize: '0.78rem',
                            fontWeight: 800,
                            color: isOpen ? '#2563eb' : '#94a3b8',
                            letterSpacing: 1,
                            minWidth: 22,
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {faq.q}
                      </span>
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: '50%',
                          background: isOpen ? 'var(--grad-tri)' : '#f6f1ea',
                          color: isOpen ? '#fff' : '#334155',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.88rem',
                          flexShrink: 0,
                          transition: 'all 0.3s',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                        }}
                      >
                        <i className="bi bi-plus-lg" />
                      </div>
                    </button>
                    <div
                      style={{
                        maxHeight: isOpen ? 480 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.45s ease',
                      }}
                    >
                      <div
                        style={{
                          padding: '0 26px 24px 62px',
                          fontSize: '0.93rem',
                          color: '#475569',
                          lineHeight: 1.75,
                          fontFamily: 'Inter,sans-serif',
                        }}
                      >
                        {faq.a}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div
              className="fade-up text-center"
              style={{
                marginTop: 32,
                padding: '24px',
                background: '#f6f1ea',
                borderRadius: 16,
                border: '1px solid #e8e3dc',
              }}
            >
              <div
                style={{
                  fontSize: '0.92rem',
                  color: '#475569',
                  marginBottom: 14,
                  fontFamily: 'Inter,sans-serif',
                }}
              >
                Still have questions?
              </div>
              <a href="#consultation" className="btn-gradient ahover">
                Ask Us Directly <i className="bi bi-arrow-right" />
              </a>
            </div>

            {/* Related pages */}
            <div className="fade-up" style={{ marginTop: 44 }}>
              <h4
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#64748b',
                  marginBottom: 16,
                  fontFamily: 'Inter,sans-serif',
                  letterSpacing: 1.8,
                  textTransform: 'uppercase',
                }}
              >
                Related Pages
              </h4>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {relatedPages.map((page, i) => {
                  const colors = ['#2563eb', '#dc2626', '#f59e0b']
                  const c = colors[i % 3]
                  return (
                    <a
                      key={page.label}
                      href={page.href}
                      style={{
                        background: `${c}10`,
                        color: c,
                        padding: '10px 20px',
                        borderRadius: 50,
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'all 0.25s',
                        fontFamily: 'Inter,sans-serif',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        border: `1px solid ${c}30`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = c
                        e.currentTarget.style.color = '#fff'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = `0 10px 22px ${c}55`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${c}10`
                        e.currentTarget.style.color = c
                        e.currentTarget.style.transform = ''
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      {page.label} <i className="bi bi-arrow-up-right" style={{ fontSize: '0.75rem' }} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
