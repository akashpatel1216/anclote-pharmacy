import Link from 'next/link'
import Image from 'next/image'
import { Package, Clock, CheckCircle, Users, Shield, Calendar } from 'lucide-react'

export default function MultiDosePackagingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Multi-Dose Packaging</h1>
            <p className="text-xl text-primary-100 mb-8">
              Simplify your medication routine with our convenient multi-dose packaging system
            </p>
          </div>
        </div>
      </section>

      {/* Pill Organizer Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/medications/pill-organizer.jpg"
              alt="Multi-dose pill organizer with organized medication packets"
              width={1200}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What is Multi-Dose Packaging?</h2>
            <p className="text-lg text-gray-600">
              Our multi-dose packaging system organizes all your medications by date and time in 
              easy-to-use, clearly labeled packets. No more sorting pills or worrying if you&apos;ve 
              taken your medications correctly.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Simple Organization</h3>
              <p className="text-gray-600">
                All medications for a specific time are packaged together in one easy-to-open packet
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Time-Stamped</h3>
              <p className="text-gray-600">
                Each packet clearly shows the date and time when medications should be taken
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Improved Adherence</h3>
              <p className="text-gray-600">
                Makes it easy to stay on track and never miss or duplicate doses
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Caregiver Friendly</h3>
              <p className="text-gray-600">
                Helps caregivers easily manage medications for loved ones
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Travel Convenient</h3>
              <p className="text-gray-600">
                Perfect for travel - no need to bring multiple pill bottles
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Reduced Errors</h3>
              <p className="text-gray-600">
                Minimizes confusion and medication errors with clear labeling
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Transfer Prescriptions</h4>
                <p className="text-gray-600 text-sm">
                  We&apos;ll transfer your prescriptions from your current pharmacy
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Organize Schedule</h4>
                <p className="text-gray-600 text-sm">
                  Our pharmacists organize your medications by dosing schedule
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Custom Packaging</h4>
                <p className="text-gray-600 text-sm">
                  Medications are packaged in convenient, labeled packets
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Monthly Delivery</h4>
                <p className="text-gray-600 text-sm">
                  Pick up your month&apos;s supply or have it delivered
                </p>
              </div>
            </div>
          </div>

          {/* Who Benefits */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Who Benefits from Multi-Dose Packaging?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="font-bold text-xl mb-4 text-primary-700">Perfect for:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Patients taking multiple medications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Seniors managing complex regimens</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Caregivers helping loved ones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Anyone who struggles with pill organizers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Frequent travelers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Busy professionals</span>
                  </li>
                </ul>
              </div>

              <div className="card bg-primary-700 text-white">
                <h4 className="font-bold text-xl mb-4">Each Packet Includes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Patient name</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Date and time to take</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>List of all medications inside</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Barcode for tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Easy-tear perforations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-200 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tamper-evident seals</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Medications?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about multi-dose packaging and get started today
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}

