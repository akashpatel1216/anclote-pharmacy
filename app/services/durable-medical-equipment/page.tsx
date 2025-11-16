import Link from 'next/link'
import Image from 'next/image'
import { Accessibility, Heart, ShoppingBag, Headphones, CheckCircle, Phone } from 'lucide-react'

export default function DurableMedicalEquipmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Durable Medical Equipment</h1>
            <p className="text-xl text-primary-100 mb-8">
              Quality medical equipment and supplies to support your health and independence at home
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/equipment/medical-equipment.jpg"
              alt="Quality durable medical equipment available at Anclote Pharmacy"
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Complete DME Solutions</h2>
            <p className="text-lg text-gray-600">
              We provide a comprehensive range of durable medical equipment to help you manage your 
              health conditions at home. Our knowledgeable staff will help you find the right equipment 
              for your needs.
            </p>
          </div>

          {/* Equipment Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-700">Mobility Aids</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Walkers and rollators</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Canes and crutches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Wheelchairs and scooters</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Transfer equipment</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-700">Bathroom Safety</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Shower chairs and benches</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Raised toilet seats</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Grab bars and rails</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bath lifts</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-700">Daily Living Aids</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Reachers and grabbers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Dressing aids</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Eating utensils</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personal care items</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-700">Orthopedic Supplies</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Braces and supports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Compression stockings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Orthopedic pillows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Therapeutic cushions</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-700">Diabetes Care</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Blood glucose monitors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Test strips and lancets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Insulin supplies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Diabetic footwear</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-primary-700">Respiratory Equipment</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Nebulizers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Oxygen concentrators</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">CPAP machines and supplies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pulse oximeters</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Insurance Accepted</h3>
              <p className="text-gray-600 text-sm">We work with Medicare and most insurance plans</p>
            </div>
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">Our staff will help you choose the right equipment</p>
            </div>
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Quality Products</h3>
              <p className="text-gray-600 text-sm">We stock only trusted, high-quality brands</p>
            </div>
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Accessibility className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Try Before You Buy</h3>
              <p className="text-gray-600 text-sm">Test equipment to ensure proper fit and function</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Medical Equipment?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Visit us or call to discuss your needs with our knowledgeable staff
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
              Visit Us
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

