import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Heart,
  HeartPulse,
  MapPin,
  Phone,
  Pill,
  Shield,
  Star,
  Truck,
  Users,
  Video,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Independent Pharmacy in Tarpon Springs, FL | Anclote Pharmacy',
  description:
    'Locally owned pharmacy serving Tarpon Springs since 2012. Prescriptions, immunizations, medical equipment and Medicare support. Call 727-944-5800.',
}

const services = [
  {
    href: '/services/pharmacy',
    title: 'Prescription Services',
    description: 'Fast prescription filling, transfers, refills, and personal pharmacist support.',
    icon: Pill,
  },
  {
    href: '/immunizations',
    title: 'Immunizations',
    description: 'Flu, shingles, COVID, and travel vaccines with walk-ins welcome during pharmacy hours.',
    icon: Shield,
  },
  {
    href: '/services/multi-dose-packaging',
    title: 'Multi-Dose Packaging',
    description: 'Pre-sorted packets organized by date and time to simplify daily routines.',
    icon: CheckCircle,
  },
  {
    href: '/services/medication-synchronization',
    title: 'Medication Synchronization',
    description: 'Get all your refills aligned to one monthly pickup date with reminder calls.',
    icon: Award,
  },
  {
    href: '/services/medication-therapy-management',
    title: 'Medication Therapy Management',
    description: 'One-on-one pharmacist reviews to catch interactions, reduce costs, and simplify care.',
    icon: Users,
  },
  {
    href: '/services/durable-medical-equipment',
    title: 'Durable Medical Equipment',
    description: 'Mobility aids, CPAP supplies, diabetic supplies, and fitting help in one place.',
    icon: Heart,
  },
  {
    href: '/services/medical-weight-loss',
    title: 'Medical Weight Loss Support',
    description: 'Medication counseling, safety checks, and refill coordination for provider-directed care.',
    icon: HeartPulse,
  },
  {
    href: '/services/delivery',
    title: 'Prescription Delivery',
    description: 'Ask about eligible local delivery, refill coordination, and medication packaging support.',
    icon: Truck,
  },
  {
    href: '/services/peptide-therapy',
    title: 'Peptide Therapy Support',
    description: 'Pharmacist counseling and safety review for provider-prescribed peptide therapy.',
    icon: Shield,
  },
  {
    href: '/services/telehealth',
    title: 'Telehealth Support',
    description: 'Connect virtual provider visits with local prescription and pharmacist follow-up.',
    icon: Video,
  },
  {
    href: '/services/long-term-care',
    title: 'Long Term Care Services',
    description: 'Independent pharmacy support for assisted living communities and care facilities.',
    icon: Shield,
  },
  {
    href: '/livescan',
    title: 'LiveScan Fingerprinting',
    description: 'Convenient AHCA, FDLE, and FD-258 fingerprinting services in Tarpon Springs.',
    icon: CheckCircle,
  },
]

const quickFacts = [
  {
    title: 'Locally owned and independent',
    description: 'Decisions stay in Tarpon Springs, so service feels personal instead of corporate.',
  },
  {
    title: 'Fast prescription transfer help',
    description: 'Most patients can move prescriptions from another pharmacy with one quick call.',
  },
  {
    title: 'Support beyond the counter',
    description: 'Medicare guidance, immunizations, and medical equipment are all handled in one place.',
  },
]

const serviceAreas = [
  {
    href: '/locations/palm-harbor',
    city: 'Palm Harbor',
    description:
      'Prescription transfers, durable medical equipment, immunizations, Medicare support, and LiveScan services near Palm Harbor.',
  },
  {
    href: '/locations/holiday',
    city: 'Holiday',
    description:
      'Independent pharmacy care for Holiday patients, caregivers, seniors, and families who want local pharmacist support.',
  },
]

const carePoints = [
  'Friendly answers from a team that knows your medications and your family by name.',
  'Walk-in immunizations, prescription transfers, and refill coordination without chain-store friction.',
  'Practical support for caregivers, seniors, and long-term care communities in Tarpon Springs.',
]

const testimonials = [
  {
    quote:
      'Great service. I got my fingerprints for a job application. Mr. Chetan Shah was very professional and provided a quick service, and provided me with information on the services at his pharmacy. I recommend this place.',
    name: 'Samantha Delint',
  },
  {
    quote:
      'The owner is very compassionate, and caring. He took the time to help us find the best fit options for our son and gave us great advice and recommendations. He treated us like we matter, and not like we are just a number.',
    name: 'Derek Arnold',
  },
  {
    quote:
      'I recently found Anclote Pharmacy and I am very glad I did. CK is an amazing pharmacist. He is really knowledgeable and wants to help people achieve a healthy lifestyle.',
    name: 'Roseanne Stagg',
  },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f5ef]">
        <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-[#e7efeb] lg:block" />
        <div className="container relative mx-auto px-4 pb-12 pt-12 md:pt-16 lg:pb-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.8fr)] lg:items-center">
            <div className="max-w-3xl py-4 lg:py-10">
              <div className="mb-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
                <span className="h-px w-10 bg-primary-500" />
                Independent pharmacy in Tarpon Springs
              </div>
              <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-[#10253d] sm:text-6xl lg:text-7xl">
                Local pharmacy care, with a pharmacist who knows you.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Prescriptions, immunizations, medical equipment, and Medicare support from one
                locally owned team serving Tarpon Springs since 2012.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/refill" className="btn-primary gap-2">
                  Refill a Prescription <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:727-944-5800" className="btn-secondary gap-2 bg-transparent">
                  <Phone className="h-4 w-4" /> Call (727) 944-5800
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-300 pt-6 text-sm font-semibold text-slate-600">
                <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary-600" /> Walk-in vaccines</span>
                <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary-600" /> Easy transfers</span>
                <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary-600" /> Medicare guidance</span>
              </div>
            </div>

            <div className="relative border border-slate-200 bg-white p-3 shadow-[0_30px_70px_-40px_rgba(11,35,65,0.45)]">
              <div className="relative aspect-[4/4.6] overflow-hidden">
                <Image
                  src="/images/pharmacy/pharmacy-customer.jpg"
                  alt="Customer receiving personal care inside Anclote Pharmacy"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              </div>
              <div className="grid gap-3 border-t border-slate-200 px-3 py-4 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="flex h-10 w-10 items-center justify-center bg-primary-50 text-primary-700">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#10253d]">Serving Tarpon Springs since 2012</p>
                  <p className="mt-0.5 text-sm text-slate-500">Independent, familiar, and here when you call.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid border border-slate-200 bg-white md:grid-cols-3">
            <div className="flex items-start gap-4 border-b border-slate-200 p-5 md:border-b-0 md:border-r">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Hours today</p><p className="mt-1 font-semibold text-[#10253d]">Monday-Friday, 9am-5pm</p></div>
            </div>
            <a href="https://maps.google.com/?q=1933+N+Pinellas+Ave+Tarpon+Springs+FL+34689" target="_blank" rel="noreferrer" className="flex items-start gap-4 border-b border-slate-200 p-5 transition hover:bg-primary-50 md:border-b-0 md:border-r">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Visit us</p><p className="mt-1 font-semibold text-[#10253d]">1933 N Pinellas Ave, Tarpon Springs</p></div>
            </a>
            <a href="tel:727-944-5800" className="flex items-start gap-4 p-5 transition hover:bg-primary-50">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-700" />
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Transfer a prescription</p><p className="mt-1 font-semibold text-[#10253d]">Start with one quick phone call</p></div>
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-5 md:grid-cols-3">
            {quickFacts.map((fact, index) => (
              <div key={fact.title} className="card bg-white/95">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  {index === 0 && <Award className="h-5 w-5" />}
                  {index === 1 && <Phone className="h-5 w-5" />}
                  {index === 2 && <Shield className="h-5 w-5" />}
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">{fact.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_32px_80px_-50px_rgba(15,23,42,0.45)]">
              <div className="relative aspect-[3/2] min-h-[320px]">
                <Image
                  src="/images/team/chetan-shah-pharmacist.png"
                  alt="Chetan Shah, pharmacist at Anclote Pharmacy"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
              </div>
            </div>

            <div>
              <div className="mb-4 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                Meet your pharmacist
              </div>
              <h2 className="section-title max-w-xl">
                Care led by Chetan Shah, PharmD.
              </h2>
              <p className="section-subtitle mx-0 mt-4 max-w-xl">
                Chetan Shah brings decades of community pharmacy experience to Anclote Pharmacy.
                Patients know him for clear answers, practical medication guidance, and the kind of
                follow-through that makes independent pharmacy care feel personal.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
                    Specialty
                  </div>
                  <p className="mt-2 font-semibold text-slate-950">
                    Community pharmacy, medication reviews, and compounding for humans and pets.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
                    Promise
                  </div>
                  <p className="mt-2 font-semibold text-slate-950">
                    A familiar pharmacist who knows your care and answers the phone.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/about" className="btn-primary gap-2">
                  Learn About Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:727-944-5800" className="btn-secondary gap-2">
                  <Phone className="h-4 w-4" />
                  Call the Pharmacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                Care that stays personal
              </div>
              <h2 className="section-title max-w-xl">
                Tarpon Springs pharmacy support that feels clear, local, and easy to trust.
              </h2>
              <p className="section-subtitle mx-0 mt-4 max-w-xl">
                Patients come to Anclote Pharmacy for prescriptions, but they stay because they can
                actually reach a real person, ask practical questions, and get help without being
                sent through a chain-store maze.
              </p>
              <div className="mt-8 space-y-4">
                {carePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4 shadow-[0_16px_36px_-30px_rgba(15,23,42,0.6)]">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <p className="text-sm leading-7 text-slate-600">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/new-patient" className="btn-primary gap-2">
                  Become a Patient
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Our Team
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="card overflow-hidden sm:row-span-2 sm:min-h-[420px]">
                <div className="relative h-full min-h-[320px] overflow-hidden rounded-[22px]">
                  <Image
                    src="/images/services/pharmacy-lab.jpg"
                    alt="Pharmacy and medical support"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5">
                    <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-md">
                      <div className="text-sm font-semibold text-primary-100">One local team</div>
                      <p className="mt-2 text-lg font-semibold">
                        Prescriptions, vaccines, equipment, and follow-up all stay in one trusted place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">You know who will answer.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The same local team handles refills, transfer questions, and day-to-day follow-through.
                </p>
              </div>

              <div className="card">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-700">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">Care that adapts to real life.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Medication sync, multi-dose packaging, and Medicare guidance reduce the stress around care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
              Pharmacy services
            </div>
            <h2 className="section-title">Everything we handle for patients and caregivers.</h2>
            <p className="section-subtitle">
              Pharmacy care built around the needs of Tarpon Springs patients, caregivers, and local
              facilities.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="card group flex h-full flex-col justify-between bg-slate-50/70 transition-all duration-300 hover:-translate-y-2"
                >
                  <div>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg transition-transform group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-950">{service.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{service.description}</p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                Serving nearby communities
              </div>
              <h2 className="section-title max-w-xl">
                Independent pharmacy care for Tarpon Springs, Palm Harbor, and Holiday.
              </h2>
              <p className="section-subtitle mx-0 mt-4 max-w-xl">
                Our pharmacy is based in Tarpon Springs, and nearby patients visit us for the same
                reason local families do: fast prescriptions, practical answers, and a pharmacist
                who knows the details.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="card group bg-white transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-950">{area.city}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
                    View service area
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-primary-100">
              Patient reviews
            </div>
            <h2 className="section-title text-white">What our patients say</h2>
            <p className="section-subtitle text-slate-300">
              Real experiences from people who trust Anclote Pharmacy for prescriptions, support,
              and service.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_-45px_rgba(15,23,42,0.9)] backdrop-blur-sm"
              >
                <div className="mb-5 flex items-center gap-1 text-accent-300">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-200">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-6 font-semibold text-white">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_32px_80px_-50px_rgba(15,23,42,0.45)] md:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
                  Visit us in Tarpon Springs
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                  Local pharmacy care, easy to reach when you need it.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                  We&apos;re at 1933 N Pinellas Ave, Tarpon Springs, FL 34689, serving Tarpon Springs,
                  Palm Harbor, and Holiday. Call 727-944-5800 or stop by. Transferring from another
                  pharmacy usually takes about five minutes.
                </p>
                <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <span>1933 N Pinellas Ave, Tarpon Springs, FL 34689</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <span>Open Monday through Friday from 9:00am to 5:00pm.</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] bg-slate-950 p-7 text-white shadow-[0_34px_80px_-45px_rgba(15,23,42,0.9)]">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-200">
                  Why patients call us first
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-primary-300" />
                    <span>Prescriptions, immunizations, medical equipment, and Medicare support.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-primary-300" />
                    <span>Friendly staff who answer the phone and follow through on your care.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-primary-300" />
                    <span>Fast prescription transfers from CVS, Walgreens, Walmart, Publix, and more.</span>
                  </li>
                </ul>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/contact"
                    className="btn-primary text-sm"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/new-patient"
                    className="btn-secondary border-white/15 bg-white/10 text-sm text-white hover:border-white/30 hover:bg-white/15 hover:text-white"
                  >
                    Become a Patient
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
