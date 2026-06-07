'use client'
import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    q: 'What makes ZoFlowX different from other Zoho partners?',
    a: "Most Zoho partners are either large agencies (slow and costly) or freelancers (overworked and not scalable). ZoFlowX is in the middle, a small, senior team that works quickly, keeps records, and only bills for work completed. Not a reseller, we are a Zoho Authorized Partner with hands-on experience in hundreds of implementations.",
  },
  {
    q: 'Is ZoFlowX a Zoho Authorized Partner?',
    a: "Yes. ZoFlowX is an officially recognized Zoho Authorized Partner with certified consultants on the team. This means that we have direct access to Zoho, access to new features before they're released to the public, and can escalate issues for you, which a freelancer can't.",
  },
  {
    q: "Can ZoFlowX fix a Zoho setup that's already a mess?",
    a: "Well, that's most of our work. About 60% of our new ZoFlowX clients are referred to us due to poor implementation of their Zoho. First we do an audit (typically 1-2 weeks) for a fee, then we provide you with a written report of what is broken, and then we fix it module by module or we rebuild it from scratch, whichever is cheaper for you in the long run.",
  },
  {
    q: 'Does ZoFlowX work with all Zoho products?',
    a: "Yes. The ZoFlowX team operates throughout the Zoho One suite, including Zoho CRM, Zoho Books, Zoho Desk, Zoho Recruit, Zoho People, Zoho Inventory, Zoho Creator, Zoho Analytics, Zoho Campaigns and more. If it's a Zoho product, we've most likely implemented it.",
  },
  {
    q: 'Can ZoFlowX migrate us from Salesforce or HubSpot to Zoho?',
    a: 'Yes. ZoFlowX is a leading Zoho Consulting Partner with dozens of Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, Insightly, Freshsales and Excel migrations. We do the data mapping, data cleaning, custom field conversion, history preservation and user training. The majority of migrations are completed in 2-4 weeks with no downtime.',
  },
  {
    q: 'How quickly can ZoFlowX start?',
    a: "We typically begin auditing and consulting within 1-3 days of signing. For full implementation projects, kickoff is typically within 2 weeks. If you have an emergency (broken workflow, failed integration, missed renewal), please contact us anyway, we have capacity available for emergencies.",
  },
  {
    q: 'What size businesses does ZoFlowX work with?',
    a: "From 5-person startups to 500-person mid-market companies. We are used by smaller teams for setup and basic automation. Larger teams use us as their fractional Zoho department. We don't do enterprise giants with 5,000+ users, they're better served by tier-1 system integrators.",
  },
  {
    q: 'Will ZoFlowX train our team on Zoho?',
    a: "Always. Each ZoFlowX engagement comes with user training: live training, recorded walkthroughs and a custom playbook for your team. The idea is to get your people to be able to take care of the daily chores so we can get to the more difficult tasks.",
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
      <div className="container" style={{ maxWidth: '90%' }}>
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 780, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Common questions</span>
          </div>
          <h2 className="section-title">
            Things people ask before <span className="grad-blue-red">working with ZoFlowX</span>
          </h2>
          <p className="section-sub mx-auto">
            Don't see your question? Drop it in the form on the right, we usually reply the same day.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
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
                        fontFamily: 'Inter,sans-serif',
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
                      <h3
                        style={{
                          margin: 0,
                          flex: 1,
                          fontFamily: 'Inter,sans-serif',
                          fontWeight: 700,
                          fontSize: '0.98rem',
                          lineHeight: 1.4,
                          color: 'inherit',
                        }}
                      >
                        {faq.q}
                      </h3>
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
                          padding: '0 26px 24px 26px',
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
              <a
                href="https://arul-zoflowx.zohobookings.in/#/Zoho_Consultation"
                target="_blank"
                rel="noreferrer"
                className="btn-gradient ahover"
                style={{ background: '#DF3A3C', backgroundImage: 'none', border: 'none', color: '#fff' }}
              >
                Ask Us Directly <i className="bi bi-arrow-right" />
              </a>
            </div>

            {/* Related pages */}
         
          </div>
        </div>
      </div>
    </section>
  )
}
