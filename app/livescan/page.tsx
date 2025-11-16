import Link from 'next/link'
import { Fingerprint, Clock, Shield, CheckCircle, DollarSign, Phone, FileText } from 'lucide-react'

export default function LiveScanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-500 to-accent-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-white text-accent-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
              NOW AVAILABLE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">LiveScan Fingerprinting Services</h1>
            <p className="text-xl text-accent-100 mb-8">
              Fast, secure, and convenient fingerprinting for background checks, licensing, and employment
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.suncoastlivescan.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-accent-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-lg text-center"
              >
                Schedule Online →
              </a>
              <a href="tel:727-944-5800" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-accent-700 transition-all text-center">
                Call: (727) 944-5800
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Professional LiveScan Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Anclote Pharmacy partners with Suncoast Livescan to provide LiveScan electronic fingerprinting services. 
              Our certified technicians provide fast, accurate digital fingerprinting for various background check 
              requirements.
            </p>
            <a 
              href="https://www.suncoastlivescan.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-accent-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-accent-700 transition-all shadow-lg"
            >
              Visit Suncoast Livescan Website →
            </a>
          </div>

          {/* Why Choose LiveScan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="card text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Fast Results</h3>
              <p className="text-gray-600 text-sm">Electronic submission for quicker processing times</p>
            </div>

            <div className="card text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Secure & Accurate</h3>
              <p className="text-gray-600 text-sm">Digital scanning ensures clear, reliable prints</p>
            </div>

            <div className="card text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fingerprint className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Certified Technicians</h3>
              <p className="text-gray-600 text-sm">Trained and certified LiveScan operators</p>
            </div>

            <div className="card text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm">Affordable rates for all fingerprinting services</p>
            </div>
          </div>

          {/* Services We Provide */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Who Needs LiveScan?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <h4 className="font-bold text-lg mb-3 text-accent-700">Employment</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pre-employment screening</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Government positions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Healthcare workers</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-lg mb-3 text-accent-700">Licensing</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional licenses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real estate agents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Security guards</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-lg mb-3 text-accent-700">Education</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Teachers and staff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>School volunteers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Substitute teachers</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-lg mb-3 text-accent-700">Adoption & Foster Care</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Adoption applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Foster parent certification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Home studies</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-lg mb-3 text-accent-700">Immigration</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Visa applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Citizenship requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Green card applications</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-lg mb-3 text-accent-700">Other Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Volunteer organizations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Court-ordered fingerprinting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Military service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-accent-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-accent-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Schedule Appointment</h4>
                <p className="text-gray-600 text-sm">
                  Call us to schedule your LiveScan appointment
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Bring Required Documents</h4>
                <p className="text-gray-600 text-sm">
                  Bring your ID and any required forms or codes
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Get Fingerprinted</h4>
                <p className="text-gray-600 text-sm">
                  Quick digital scan of your fingerprints
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Electronic Submission</h4>
                <p className="text-gray-600 text-sm">
                  Results sent electronically to the appropriate agency
                </p>
              </div>
            </div>
          </div>

          {/* What to Bring */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">What to Bring</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-accent-600 mr-2" />
                  <h4 className="font-bold text-xl text-gray-900">Required Items:</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Valid photo ID (driver&apos;s license, passport, or state ID)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">ORI number or agency information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Any forms provided by your employer or agency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Payment (cash, credit, or debit accepted)</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-accent-600 text-white">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-white mr-2" />
                  <h4 className="font-bold text-xl">Important Information:</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Appointments recommended but walk-ins welcome</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Process typically takes 10-15 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Results transmitted electronically</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Results available via your requesting agency</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your LiveScan Appointment?</h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Fast, secure, and convenient fingerprinting services available now
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.suncoastlivescan.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-accent-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center shadow-lg"
            >
              Schedule Online at Suncoast Livescan →
            </a>
            <a href="tel:727-944-5800" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-accent-700 transition-all flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call: (727) 944-5800
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

