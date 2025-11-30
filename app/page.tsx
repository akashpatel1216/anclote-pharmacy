import Link from 'next/link'
import Image from 'next/image'
import { Pill, Users, Heart, Clock, Award, Shield, Phone, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/pharmacy-hero.jpg"
            alt="Anclote Pharmacy Interior"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-primary-800/90"></div>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
              ⭐ Serving Tarpon Springs Since 2012
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Your Trusted Community Pharmacy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50 drop-shadow-md">
              Providing personalized healthcare services for our community since 2012. 
              Your health is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/refill" className="inline-block bg-white text-primary-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl text-center">
                Refill Prescription →
              </Link>
              <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-700 hover:scale-105 transition-all backdrop-blur-sm text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </section>

      {/* LiveScan Featured Banner */}
      <section className="bg-accent-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Now Offering LiveScan Fingerprinting!</h2>
              <p className="text-lg">Fast, secure, and convenient background check services available now.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/livescan" className="bg-white text-accent-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all text-center">
                Learn More
              </Link>
              <a href="tel:(727) 944-5800" className="bg-accent-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-800 transition-all flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Anclote Pharmacy?</h2>
            <p className="section-subtitle">
              Experience premier care and personalized service for your well-being
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center hover:scale-105 transition-transform">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Care</h3>
              <p className="text-gray-600">
                Trust our experienced professionals for top-notch healthcare services and pharmaceutical expertise.
              </p>
            </div>
            <div className="card text-center hover:scale-105 transition-transform">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Personalized Approach</h3>
              <p className="text-gray-600">
                Tailored treatments to suit individual health needs and preferences. We know your name!
              </p>
            </div>
            <div className="card text-center hover:scale-105 transition-transform">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Trusted Service</h3>
              <p className="text-gray-600">
                Over a decade of serving our community with dedication, reliability, and compassion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Image Section with Unique Design */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative">
                <Image
                  src="/images/medications/health-pills.jpg"
                  alt="Health spelled with pills representing our commitment to your well-being"
                  width={1200}
                  height={800}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-primary-100 px-4 py-2 rounded-full text-primary-700 font-bold text-sm">
                💊 Quality Medications
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Your Health, Our Priority
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide a comprehensive range of prescription and over-the-counter medications, 
                all sourced from trusted suppliers to ensure the highest quality for our patients.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-primary-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-primary-700 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Quality Assured</div>
                </div>
                <div className="bg-accent-50 p-4 rounded-xl">
                  <div className="text-3xl font-bold text-accent-700 mb-1">Fast</div>
                  <div className="text-sm text-gray-600">Prescription Filling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services with Enhanced Design */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full -translate-y-1/2 -translate-x-1/2 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 px-4 py-2 rounded-full text-primary-700 font-bold text-sm mb-4">
              🏥 Our Services
            </div>
            <h2 className="section-title">Core Healthcare Services</h2>
            <p className="section-subtitle">
              Comprehensive pharmaceutical care and health services under one roof
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/services/pharmacy" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="card relative overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                <div className="absolute top-0 right-0 text-9xl font-bold text-primary-50 -mt-4 -mr-4">01</div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <Pill className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Medication</h3>
                  <p className="text-gray-600 mb-4">
                    Professional medication management, prescription filling, and pharmaceutical consultation services.
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services/medication-therapy-management" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="card relative overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                <div className="absolute top-0 right-0 text-9xl font-bold text-accent-50 -mt-4 -mr-4">02</div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-accent-500 to-accent-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation</h3>
                  <p className="text-gray-600 mb-4">
                    Personalized health consultations and medication therapy management for optimal outcomes.
                  </p>
                  <div className="flex items-center text-accent-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/immunizations" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="card relative overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300">
                <div className="absolute top-0 right-0 text-9xl font-bold text-primary-50 -mt-4 -mr-4">03</div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-600 to-accent-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Immunizations</h3>
                  <p className="text-gray-600 mb-4">
                    Convenient immunization services to keep you and your family protected and healthy.
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Impact</h2>
            <p className="text-xl text-primary-100">Making a difference in our community every day</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">2</div>
              <div className="text-lg text-primary-200">Pharmacists</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">12+</div>
              <div className="text-lg text-primary-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">4</div>
              <div className="text-lg text-primary-200">Qualified Staff</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">1000+</div>
              <div className="text-lg text-primary-200">Happy Patients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacy Experience Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-accent-100 px-4 py-2 rounded-full text-accent-700 font-bold text-sm mb-6">
                🏪 Visit Our Pharmacy
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Experience Personalized Care
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Step into our welcoming pharmacy where friendly faces and expert care await. Our team 
                takes the time to understand your needs and provide personalized service.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary-100 p-2 rounded-lg mr-3">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Friendly, knowledgeable staff</div>
                    <div className="text-sm text-gray-600">We know your name and remember your preferences</div>
                  </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary-100 p-2 rounded-lg mr-3">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Personalized medication consultations</div>
                    <div className="text-sm text-gray-600">One-on-one time with our pharmacists</div>
                  </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary-100 p-2 rounded-lg mr-3">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Well-stocked pharmacy</div>
                    <div className="text-sm text-gray-600">Quality products and comprehensive inventory</div>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary inline-block hover:scale-105 transition-transform">
                Visit Us Today →
              </Link>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative">
                <Image
                  src="/images/pharmacy/pharmacy-customer.jpg"
                  alt="Friendly customer service at Anclote Pharmacy"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-subtitle">
              Read reviews from our valued community members
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;Great service. I got my fingerprints for a job application. Mr. Chetan Shah was very professional and provided a quick service, and provided me with information on the services at his pharmacy. I recommend this place.&quot;
              </p>
              <p className="font-bold text-primary-700">- Samantha Delint</p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;The owner is very compassionate, and caring. He took the time to help us find the best fit options for our son and gave us great advice and recommendations. We even were able to sample some things! He treated us like we matter, and not like we&apos;re just a number. This pharmacy had everything we were looking for and we walked out extremely satisfied and happy! The kids even got some cute socks, they have a gift area too which is cute and has a variety of affordable items! Thanks again for the amazing service!&quot;
              </p>
              <p className="font-bold text-primary-700">- Derek Arnold</p>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &quot;I recently found Anclote Pharmacy and I am very glad I did. CK is an amazing pharmacist. He is really knowledgeable about all natural products. He gave me literature to read and discussed the benefits of natural products. He really wants to help people achieve a healthy lifestyle! Also, his store has the most unique things to purchase.&quot;
              </p>
              <p className="font-bold text-primary-700">- Roseanne Stagg</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Your Health Journey
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Experience the difference with Anclote Pharmacy. Let&apos;s work together towards your health goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/new-patient" className="bg-white text-primary-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-lg">
              Become a Patient
            </Link>
            <Link href="/services/pharmacy" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-700 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

