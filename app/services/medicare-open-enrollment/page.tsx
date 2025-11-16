import Link from 'next/link'
import { FileText, HelpCircle, DollarSign, CheckCircle, Calendar, Users } from 'lucide-react'

export default function MedicareOpenEnrollmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medicare Open Enrollment</h1>
            <p className="text-xl text-primary-100 mb-8">
              Expert guidance to help you choose the best Medicare plan for your needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Enrollment Period Banner */}
          <div className="bg-accent-500 text-white rounded-xl p-6 md:p-8 mb-16 text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Annual Enrollment Period</h2>
            <p className="text-lg mb-2">October 15 - December 7</p>
            <p>Coverage begins January 1 of the following year</p>
          </div>

          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">We're Here to Help</h2>
            <p className="text-lg text-gray-600">
              Choosing a Medicare plan can be confusing. Our pharmacists and staff are trained to help 
              you understand your options and find a plan that covers your medications and fits your budget.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Free Consultation</h3>
              <p className="text-gray-600 mb-4">
                Schedule a free, no-obligation consultation with our Medicare experts:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Review your current medications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Compare available plans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Calculate total medication costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personalized recommendations</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cost Analysis</h3>
              <p className="text-gray-600 mb-4">
                We'll help you understand the true cost of each plan:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Monthly premiums</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Deductibles and copays</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Coverage gap ("donut hole")</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Annual out-of-pocket maximum</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Formulary Review</h3>
              <p className="text-gray-600 mb-4">
                We'll check if your medications are covered:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Medication tier levels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Prior authorization requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Quantity limits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Preferred pharmacy networks</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                Our support doesn't end after enrollment:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Answer questions year-round</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Help with plan changes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Assist with appeals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Annual plan review</span>
                </li>
              </ul>
            </div>
          </div>

          {/* What to Bring */}
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">What to Bring to Your Consultation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">List of current medications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Current Medicare card</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Current prescription plan information</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">List of preferred pharmacies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">List of doctors and specialists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Any plan comparison materials</span>
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
          <h2 className="text-3xl font-bold mb-6">Schedule Your Free Medicare Consultation</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't navigate Medicare alone. Let our experts help you find the right plan.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

