import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Bell, CheckCircle, TrendingUp, Shield, Users } from 'lucide-react'

export default function MedicationAdherencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Medication Adherence</h1>
            <p className="text-xl text-primary-100 mb-8">
              Helping you stay on track with your medications for better health outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Medication Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/medications/white-pills-grid.jpg"
              alt="Organized medication management for better adherence"
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Medication Adherence Matters</h2>
            <p className="text-lg text-gray-600">
              Taking medications as prescribed is crucial for managing chronic conditions and achieving 
              the best health outcomes. Our medication adherence programs help you stay consistent with 
              your treatment plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Reminder Systems</h3>
              <p className="text-gray-600 mb-4">
                We offer multiple reminder options to help you remember when to take your medications:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Automated phone call reminders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Text message notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Email alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Refill reminder service</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Medication Synchronization</h3>
              <p className="text-gray-600 mb-4">
                Simplify your routine by picking up all your medications on the same day each month:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Fewer pharmacy trips</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Reduced risk of missing doses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Better medication management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Convenient scheduling</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Adherence Monitoring</h3>
              <p className="text-gray-600 mb-4">
                We track your prescription refills to identify potential adherence issues:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Refill history tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Early intervention for missed refills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Coordination with healthcare providers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Regular follow-up support</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Personalized Support</h3>
              <p className="text-gray-600 mb-4">
                Our team provides individualized support to help you overcome adherence barriers:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">One-on-one counseling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Education about your medications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Side effect management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cost-saving solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Benefits of Better Adherence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Better Health</h4>
                <p className="text-gray-600">Improved disease management and health outcomes</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <TrendingUp className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Reduced Costs</h4>
                <p className="text-gray-600">Fewer hospitalizations and emergency room visits</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Peace of Mind</h4>
                <p className="text-gray-600">Confidence that you're following your treatment plan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Adherence Program Today</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let us help you stay on track with your medications
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}

