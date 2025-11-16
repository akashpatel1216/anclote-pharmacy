import Link from 'next/link'
import Image from 'next/image'
import { Pill, Users, Heart, Clock, Award, Shield, Phone, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Community Pharmacy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Providing personalized healthcare services for our community since 2012. 
              Your health is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/refill" className="inline-block bg-white text-primary-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-lg text-center">
                Refill Prescription
              </Link>
              <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-700 transition-all text-center">
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

      {/* Health Image Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/medications/health-pills.jpg"
              alt="Health spelled with pills representing our commitment to your well-being"
              width={1200}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Core Healthcare Services</h2>
            <p className="section-subtitle">
              Comprehensive pharmaceutical care and health services under one roof
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/pharmacy" className="card group cursor-pointer">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Medication</h3>
                <span className="text-4xl font-bold text-primary-200">01</span>
              </div>
              <p className="text-gray-600 mb-4">
                Professional medication management, prescription filling, and pharmaceutical consultation services.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">Learn more →</span>
            </Link>

            <Link href="/services/medication-therapy-management" className="card group cursor-pointer">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Consultation</h3>
                <span className="text-4xl font-bold text-primary-200">02</span>
              </div>
              <p className="text-gray-600 mb-4">
                Personalized health consultations and medication therapy management for optimal outcomes.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">Learn more →</span>
            </Link>

            <Link href="/immunizations" className="card group cursor-pointer">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Immunizations</h3>
                <span className="text-4xl font-bold text-primary-200">03</span>
              </div>
              <p className="text-gray-600 mb-4">
                Convenient immunization services to keep you and your family protected and healthy.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">Learn more →</span>
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

      {/* Pharmacy Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Image
                src="/images/pharmacy/pharmacy-customer.jpg"
                alt="Friendly customer service at Anclote Pharmacy"
                width={800}
                height={600}
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Experience Personalized Care</h2>
              <p className="text-lg text-gray-600 mb-6">
                Step into our welcoming pharmacy where friendly faces and expert care await. Our team 
                takes the time to understand your needs and provide personalized service.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Friendly, knowledgeable staff</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Personalized medication consultations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Well-stocked pharmacy with quality products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comfortable, accessible environment</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary inline-block">
                Visit Us Today
              </Link>
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
                &quot;This pharmacy was recommended to us when we first moved to town, now we&apos;re the ones doing the recommending! Great personal service, friendly, fantastic prices and they call to let you know it&apos;s time to refill your normal monthly prescriptions. Love our hometown pharmacy and its staff!&quot;
              </p>
              <p className="font-bold text-primary-700">- Amy G.</p>
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
                &quot;Love, love, love the personal service! We have found our pharmacy home. The staff knows my name and always greets me with a smile.&quot;
              </p>
              <p className="font-bold text-primary-700">- Eve H.</p>
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
                &quot;Friendly and personable staff, really competitive prices and a lot faster than the big chain pharmacies. This is the place to go if you want that FAMILY TREATMENT!&quot;
              </p>
              <p className="font-bold text-primary-700">- Sean O.</p>
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

