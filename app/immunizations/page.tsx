import Link from 'next/link'
import Image from 'next/image'
import { Shield, Syringe, Users, Clock, CheckCircle, Phone, Calendar } from 'lucide-react'

export default function ImmunizationsPage() {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/vaccination-hero.jpg"
            alt="Vaccination services background"
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
              💉 Stay Protected
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Immunization Services</h1>
            <p className="text-xl text-primary-50 mb-8 drop-shadow-md">
              Convenient vaccination services to keep you and your family protected and healthy
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
              Schedule Vaccination →
            </Link>
          </div>
        </div>
      </section>

      {/* Immunization Image with Enhanced Design */}
      <section className="py-16 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/syringe-medical.jpg"
                  alt="Professional immunization services with medical equipment"
                  width={1200}
                  height={600}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">Professional Immunization Services</h3>
                    <p className="text-white/90">Administered by certified pharmacists in a safe, comfortable environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Stay Protected with Our Immunization Services</h2>
            <p className="text-lg text-gray-600">
              Our certified pharmacists can administer a wide range of vaccines to help protect you and 
              your loved ones from preventable diseases. Walk-ins welcome, or schedule an appointment 
              for your convenience.
            </p>
          </div>

          {/* Available Vaccines */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Available Vaccinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <div className="flex items-center mb-3">
                  <Syringe className="w-6 h-6 text-primary-600 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">Flu (Influenza)</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Annual flu shots available for adults and children 6 months and older
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Syringe className="w-6 h-6 text-primary-600 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">COVID-19</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Primary series and booster doses for eligible individuals
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Syringe className="w-6 h-6 text-primary-600 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">Shingles (Shingrix)</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Two-dose vaccine series for adults 50 years and older
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Syringe className="w-6 h-6 text-primary-600 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">Pneumonia (Pneumococcal)</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Protection against pneumococcal disease for at-risk individuals
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Syringe className="w-6 h-6 text-primary-600 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">Tdap/Td</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Tetanus, diphtheria, and pertussis (whooping cough) vaccine
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Syringe className="w-6 h-6 text-primary-600 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">Hepatitis A & B</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Protection against hepatitis infections
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Syringe className="w-6 h-6 text-primary-600 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">HPV (Gardasil)</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Human papillomavirus vaccine for ages 9-45
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Syringe className="w-6 h-6 text-primary-600 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">Meningitis</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Meningococcal vaccine for teens and at-risk adults
                </p>
              </div>

              <div className="card">
                <div className="flex items-center mb-3">
                  <Syringe className="w-6 h-6 text-primary-600 mr-2" />
                  <h4 className="font-bold text-lg text-gray-900">Travel Vaccines</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Typhoid, yellow fever, and other travel immunizations
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">No Appointment Needed</h3>
              <p className="text-gray-600 text-sm">Walk-ins welcome during business hours</p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Certified Pharmacists</h3>
              <p className="text-gray-600 text-sm">Administered by trained professionals</p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Insurance Accepted</h3>
              <p className="text-gray-600 text-sm">Most insurance plans cover vaccinations</p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Family Friendly</h3>
              <p className="text-gray-600 text-sm">Services for all ages 6 months and up</p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Visit or Call</h4>
                <p className="text-gray-600 text-sm">
                  Walk in or schedule an appointment at your convenience
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Brief Screening</h4>
                <p className="text-gray-600 text-sm">
                  Complete a simple health screening form
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Get Vaccinated</h4>
                <p className="text-gray-600 text-sm">
                  Receive your vaccine from our certified pharmacist
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Documentation</h4>
                <p className="text-gray-600 text-sm">
                  Receive your vaccination record card
                </p>
              </div>
            </div>
          </div>

          {/* What to Bring */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">What to Bring</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="font-bold text-xl mb-4 text-primary-700">Required Items:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Photo ID or driver&apos;s license</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Insurance card (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Immunization record card</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-primary-700 text-white">
                <h4 className="font-bold text-xl mb-4">Helpful Tips:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Wear short sleeves or loose clothing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Eat before your vaccination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Plan to wait 15 minutes after</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Vaccinated?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Protect yourself and your loved ones. Walk in today or call to schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Now
            </Link>
            <a href="tel:(727) 944-5800" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-700 transition-all flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              (727) 944-5800
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

