import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, ClipboardList, ExternalLink, Phone, Shield, Video } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Telehealth Doctor Support in Tarpon Springs | Anclote Pharmacy',
  description:
    'Telehealth support for Tarpon Springs patients. Connect with a provider, coordinate prescriptions and get pharmacist follow-up. Call 727-944-5800.',
}

const supportSteps = [
  'Schedule or complete your telehealth visit with a licensed provider.',
  'Ask the provider to send eligible prescriptions to Anclote Pharmacy.',
  'Our pharmacist reviews the prescription, checks your profile, and contacts you with next steps.',
]

const faqs = [
  {
    question: 'Can a telehealth provider send prescriptions to Anclote Pharmacy?',
    answer:
      'Yes. Ask your provider to send eligible prescriptions to Anclote Pharmacy in Tarpon Springs, and call us if you want to confirm we received it.',
  },
  {
    question: 'Can the pharmacist answer questions after a virtual visit?',
    answer:
      'Yes. We can review medication directions, interactions, refill timing, insurance questions, and next steps once your prescription is received.',
  },
  {
    question: 'Is telehealth right for emergencies?',
    answer:
      'No. For urgent or life-threatening symptoms, call 911 or go to the nearest emergency department.',
  },
]

export default function TelehealthPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="page-eyebrow">Telehealth support in Tarpon Springs</div>
            <h1 className="page-heading">Telehealth Doctor and Pharmacy Support</h1>
            <p className="page-intro">
              Connect virtual provider care with local pharmacy follow-through, including
              prescription coordination, pharmacist counseling, insurance help, and refill support.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="card">
                <div className="feature-icon">
                  <Video className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Virtual Visit, Local Pharmacy Help</h2>
                <p className="body-copy">
                  Telehealth can make it easier to talk with a provider from home. Anclote Pharmacy
                  helps close the loop locally when a prescription, medication question, or follow-up
                  support is needed after your visit.
                </p>
              </div>
              <div className="card">
                <div className="feature-icon">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h2 className="compact-title">Medication Review After Telehealth</h2>
                <p className="body-copy">
                  Our pharmacist can review directions, check for interactions with your current
                  medications, answer safety questions, and help coordinate refills after your
                  provider sends a prescription.
                </p>
              </div>
            </div>

            <div className="mt-12 tint-panel">
              <h2 className="mb-6 text-3xl font-semibold text-slate-950">How It Works</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {supportSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="body-copy">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 dark-panel">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-primary-100">
                    Telehealth provider resource
                  </div>
                  <h2 className="mb-4 text-3xl font-semibold">Kinchit Shah MD FACP</h2>
                  <p className="text-slate-300">
                    Patients who need a telehealth doctor resource can visit Kinchit Shah MD FACP
                    online, then ask that eligible prescriptions be sent to Anclote Pharmacy for
                    local pharmacist support.
                  </p>
                </div>
                <a
                  href="https://kinchitshahmd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary gap-2"
                >
                  Visit KinchitShahMD.com
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-12 card">
              <div className="feature-icon">
                <ClipboardList className="h-8 w-8 text-primary-600" />
              </div>
              <h2 className="compact-title">What to Have Ready</h2>
              <p className="body-copy">
                Keep your medication list, allergy history, insurance card, preferred pharmacy
                information, and provider instructions available during your virtual visit. If a
                prescription is sent to us, call 727-944-5800 to confirm next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="muted-band">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-title text-center">Telehealth FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="card">
                  <div className="mb-2 flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary-600" />
                    <h3 className="text-xl font-semibold text-slate-950">{faq.question}</h3>
                  </div>
                  <p className="body-copy">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="tel:727-944-5800" className="btn-primary gap-2">
                <Phone className="mr-2 h-5 w-5" />
                Call 727-944-5800
              </a>
              <Link href="/contact" className="btn-secondary gap-2">
                Contact the Pharmacy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
