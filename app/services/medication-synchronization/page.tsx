import Link from 'next/link'
import { Calendar, CheckCircle, Clock, Smile, TrendingUp, Package } from 'lucide-react'

export default function MedicationSynchronizationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medication Synchronization</h1>
            <p className="text-xl text-primary-100 mb-8">
              Pick up all your medications on one convenient day each month
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">One Day. All Medications.</h2>
            <p className="text-lg text-gray-600">
              Tired of multiple trips to the pharmacy each month? Medication synchronization, or &quot;med sync,&quot; 
              aligns all your prescription refills to the same day, making it easier to manage your medications 
              and save time.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fewer Pharmacy Trips</h3>
              <p className="text-gray-600">
                Pick up all prescriptions at once instead of making multiple trips throughout the month
              </p>
            </div>

            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Better Adherence</h3>
              <p className="text-gray-600">
                Never run out of medications because you forgot to refill one prescription
              </p>
            </div>

            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Time-Saving</h3>
              <p className="text-gray-600">
                Spend less time managing prescriptions and more time doing what you love
              </p>
            </div>

            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smile className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Less Stress</h3>
              <p className="text-gray-600">
                No more keeping track of multiple refill dates and schedules
              </p>
            </div>

            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Improved Health</h3>
              <p className="text-gray-600">
                Consistent medication use leads to better health outcomes
              </p>
            </div>

            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personalized Service</h3>
              <p className="text-gray-600">
                Your pharmacist reviews your medications each month
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">How Med Sync Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Enroll</h4>
                <p className="text-gray-600 text-sm">
                  Talk to your pharmacist about enrolling in medication synchronization
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Choose Your Date</h4>
                <p className="text-gray-600 text-sm">
                  Select the most convenient day of the month for your pickups
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">We Sync</h4>
                <p className="text-gray-600 text-sm">
                  We align all your prescriptions to your chosen refill date
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Reminder Call</h4>
                <p className="text-gray-600 text-sm">
                  We&apos;ll call you before your pickup date to confirm your order
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">What&apos;s Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h4 className="font-bold text-xl mb-4 text-primary-700">Pharmacy Services</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automatic prescription refills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Monthly reminder calls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Prescription synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pharmacist medication review</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Insurance verification</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-xl mb-4 text-primary-700">Your Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">One convenient pickup day</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No appointment necessary</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Free service (no extra cost)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flexibility to change pickup date</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Delivery options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Is there a cost for med sync?</h4>
                <p className="text-gray-600">
                  No! Medication synchronization is a free service we offer to help our patients better 
                  manage their medications.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Can I change my pickup date?</h4>
                <p className="text-gray-600">
                  Yes, you can change your monthly pickup date at any time. Just let us know, and we&apos;ll 
                  adjust your schedule.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">What if I need a prescription before my scheduled date?</h4>
                <p className="text-gray-600">
                  We can always fill prescriptions early if needed. Just give us a call and we&apos;ll have 
                  it ready for you.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Will this work with my insurance?</h4>
                <p className="text-gray-600">
                  Yes, medication synchronization works with all insurance plans. We handle all the 
                  insurance billing as usual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Medication Synchronization Today</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Simplify your life with one convenient pickup day each month
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
              Enroll Now
            </Link>
            <a href="tel:(727) 944-5800" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-700 transition-all">
              Call to Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

