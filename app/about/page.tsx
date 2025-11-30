import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, Award, Target, CheckCircle, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/pharmacy-team.jpg"
            alt="Anclote Pharmacy team"
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
              🏪 Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">About Anclote Pharmacy</h1>
            <p className="text-xl text-primary-50 mb-8 drop-shadow-md">
              Building relationships through quality care since 2012
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Anclote Pharmacy opened its doors in 2012 with a simple mission: to provide personalized, 
                compassionate pharmaceutical care to our community. Over the years, we&apos;ve grown from a small 
                neighborhood pharmacy into a trusted healthcare partner for thousands of families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="card">
                <Heart className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Patient-Centered Care</h3>
                <p className="text-gray-600">
                  We believe in treating every patient as family. Our pharmacists take the time to get 
                  to know you, understand your health needs, and provide personalized advice and support.
                </p>
              </div>

              <div className="card">
                <Users className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Community Focused</h3>
                <p className="text-gray-600">
                  As an independent pharmacy, we&apos;re deeply rooted in our community. We&apos;re not just here 
                  to fill prescriptions – we&apos;re here to be your trusted healthcare resource.
                </p>
              </div>
            </div>

            {/* Pharmacy Interior Image with Enhanced Design */}
            <div className="mb-16 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pharmacy/pharmacy-customer.jpg"
                  alt="Friendly customer service and welcoming pharmacy environment"
                  width={1200}
                  height={600}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end">
                  <div className="p-8">
                    <h3 className="text-white text-3xl font-bold mb-2">Welcome to Our Pharmacy</h3>
                    <p className="text-white/90 text-lg">Where every patient is treated like family</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To provide exceptional pharmaceutical care and personalized service that improves 
                  the health and well-being of our community members.
                </p>
              </div>

              <div className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted pharmacy in our community, known for our expertise, 
                  compassion, and commitment to patient care.
                </p>
              </div>

              <div className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Values</h3>
                <p className="text-gray-600">
                  Compassion, integrity, excellence, and dedication to improving the lives of 
                  those we serve every single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              What Sets Us Apart
            </h2>
            <div className="space-y-6">
              <div className="card hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Personal Service</h3>
                    <p className="text-gray-600">
                      Unlike big chain pharmacies, we know your name, remember your preferences, and 
                      take time to answer your questions without rushing you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Pharmacists</h3>
                    <p className="text-gray-600">
                      Our experienced pharmacists are medication experts who provide comprehensive 
                      consultations and medication therapy management services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Competitive Pricing</h3>
                    <p className="text-gray-600">
                      We offer competitive prices on all medications and work to find cost-saving 
                      solutions for our patients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Comprehensive Services</h3>
                    <p className="text-gray-600">
                      From prescription filling to immunizations to LiveScan fingerprinting, we&apos;re 
                      your one-stop shop for health and wellness needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Convenient Location</h3>
                    <p className="text-gray-600">
                      Easily accessible with ample parking, we make it simple to get the care you need 
                      close to home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-primary-100">Making a difference in our community every day</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">12+</div>
              <div className="text-lg text-primary-200">Years Serving</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">1000+</div>
              <div className="text-lg text-primary-200">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">2</div>
              <div className="text-lg text-primary-200">Pharmacists</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">4</div>
              <div className="text-lg text-primary-200">Qualified Staff</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600 mb-12">
              Our dedicated team of healthcare professionals is here to serve you with expertise 
              and compassion. Every member of our team is committed to providing you with the best 
              possible care.
            </p>

            <div className="card">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Experienced Healthcare Professionals</h3>
              <p className="text-gray-600 mb-6">
                Our pharmacists and staff bring years of experience and a genuine passion for helping 
                people. We&apos;re here not just to fill prescriptions, but to be your trusted healthcare advisors.
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-3">
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Licensed and certified pharmacists</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Certified immunizing pharmacists</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Medication therapy management specialists</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Certified LiveScan technicians</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Become Part of Our Pharmacy Family</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Experience the difference of personalized pharmacy care. Transfer your prescriptions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/new-patient" className="bg-white text-primary-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all">
              New Patient Form
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-700 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

