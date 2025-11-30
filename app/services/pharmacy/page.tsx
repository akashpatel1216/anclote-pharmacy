import Link from 'next/link'
import Image from 'next/image'
import { Pill, Clock, DollarSign, Heart, CheckCircle, Phone } from 'lucide-react'

export default function PharmacyServicesPage() {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/pharmacy-bottles.jpg"
            alt="Pharmacy medication bottles"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-800/95"></div>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
              💊 Professional Care
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Pharmacy Services</h1>
            <p className="text-xl text-primary-50 mb-8 drop-shadow-md">
              Professional medication management and pharmaceutical care tailored to your needs
            </p>
            <Link href="/refill" className="inline-block bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
              Refill Prescription →
            </Link>
          </div>
        </div>
      </section>

      {/* Medication Image Section with Enhanced Design */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/medications/pills-capsules.jpg"
                  alt="Professional medication management with various pills and capsules"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/medications/white-pills-grid.jpg"
                  alt="Organized medication management system"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Medications You Can Trust</h3>
            <p className="text-gray-600">
              We source all our medications from licensed distributors and follow strict quality control protocols 
              to ensure you receive safe, effective treatments every time.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Pill className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Prescription Services</h2>
              <p className="text-gray-600 mb-6">
                We fill all types of prescriptions quickly and accurately. Our pharmacists are available 
                to answer questions about your medications and ensure you understand how to take them properly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Fast prescription filling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Insurance billing and coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Generic substitution when available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Prescription transfer services</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Refill Reminders</h2>
              <p className="text-gray-600 mb-6">
                Never run out of your medications again. We provide automated refill reminder calls and 
                texts to ensure you stay on track with your medication schedule.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Automated reminder calls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Text message notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Easy online refill requests</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Synchronization available</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Competitive Pricing</h2>
              <p className="text-gray-600 mb-6">
                We offer competitive prices on all medications and work with most insurance plans. 
                We&apos;ll help you find the most cost-effective option for your prescriptions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Competitive cash prices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Most insurance plans accepted</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Discount programs available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Price match guarantee</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Personalized Care</h2>
              <p className="text-gray-600 mb-6">
                Our pharmacists take the time to get to know you and your health needs. We provide 
                one-on-one consultations and personalized medication counseling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personal medication consultations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Drug interaction screening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Allergy documentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Medication history tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Additional Pharmacy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/medication-synchronization" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-primary-700">Medication Synchronization</h3>
              <p className="text-gray-600">Pick up all your medications on one convenient day each month</p>
            </Link>
            <Link href="/services/multi-dose-packaging" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-primary-700">Multi-Dose Packaging</h3>
              <p className="text-gray-600">Organized packaging to help you manage multiple medications</p>
            </Link>
            <Link href="/services/medication-therapy-management" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-primary-700">Medication Therapy Management</h3>
              <p className="text-gray-600">Comprehensive medication reviews with our pharmacists</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transfer Your Prescriptions?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Switching to Anclote Pharmacy is easy. We&apos;ll handle all the details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/refill" className="bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
              Transfer Now
            </Link>
            <a href="tel:(727) 944-5800" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-700 transition-all flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

