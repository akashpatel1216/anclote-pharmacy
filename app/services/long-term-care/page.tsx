import Link from 'next/link'
import { Home, Heart, Package, CheckCircle, Clock, Users } from 'lucide-react'

export default function LongTermCarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Long Term Care Services</h1>
            <p className="text-xl text-primary-100 mb-8">
              Specialized pharmacy services for assisted living facilities, nursing homes, and group homes
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Dedicated Care Facility Support</h2>
            <p className="text-lg text-gray-600">
              We partner with long-term care facilities to provide comprehensive pharmaceutical services 
              that ensure residents receive the right medications at the right time.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Unit Dose Packaging</h3>
              <p className="text-gray-600 mb-4">
                Our specialized packaging system ensures accurate medication administration:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Individual dose packaging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Clearly labeled with patient information</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Organized by administration time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Reduces medication errors</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Emergency Service</h3>
              <p className="text-gray-600 mb-4">
                Round-the-clock support for urgent medication needs:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Emergency medication delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">After-hours pharmacist consultation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Stat order processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">On-call support team</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Consultant Pharmacist Services</h3>
              <p className="text-gray-600 mb-4">
                Expert pharmaceutical oversight for facility residents:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Monthly drug regimen reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Recommendations to physicians</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Staff education and training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Policy and procedure development</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Facility Management Support</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive services to support facility operations:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Electronic order processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Billing and insurance coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Inventory management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Regulatory compliance support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Facilities We Serve */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Facilities We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-10 h-10 text-primary-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Assisted Living Facilities</h4>
                <p className="text-gray-600 text-sm">Supporting independent living with medication management</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-primary-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Skilled Nursing Facilities</h4>
                <p className="text-gray-600 text-sm">Comprehensive pharmaceutical care for skilled nursing</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Group Homes</h4>
                <p className="text-gray-600 text-sm">Specialized services for group home residents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner With Us for Long Term Care</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Discover how our services can benefit your facility and residents
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}

