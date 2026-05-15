import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Process from '@/components/Process'
import Comparison from '@/components/Comparison'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Resources from '@/components/Resources'
import Consultation from '@/components/Consultation'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'

export const metadata = {
  title: 'Zoho Managed Services by ZoFlowX | Top Zoho Partner',
  description:
    'Get expert Zoho Managed Services from ZoFlowX, a top Zoho Consulting Partner. Implementation, customization & support — all in one team. Book a free call.',
  alternates: { canonical: 'https://zoflowx.com/zoho-managed-services' },
  openGraph: {
    title: 'Zoho Managed Services by ZoFlowX | Top Zoho Partner',
    description:
      'End-to-end Zoho Managed Services. Set up, fix, build, and run — one team, one contract. Book a free 30-minute audit.',
    url: 'https://zoflowx.com/zoho-managed-services',
    type: 'website',
  },
}

export default function ZohoManagedServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <WhyUs />
        <Process />
        <Comparison />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <Resources />
        <Consultation />
        <FAQ />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
