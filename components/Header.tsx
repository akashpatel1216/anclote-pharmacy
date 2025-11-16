'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone, Mail, Clock } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLiveScanOpen, setIsLiveScanOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:727-944-5800" className="flex items-center hover:text-primary-200 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (727) 944-5800
              </a>
              <a href="mailto:info@anclotepharmacy.com" className="flex items-center hover:text-primary-200 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@anclotepharmacy.com
              </a>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Mon-Fri: 9am-5pm | Sat-Sun: Closed
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Anclote Pharmacy Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link href="/" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link href="/services/pharmacy" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b">
                    Pharmacy Services
                  </Link>
                  <Link href="/services/medication-adherence" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b">
                    Medication Adherence
                  </Link>
                  <Link href="/services/durable-medical-equipment" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b">
                    Durable Medical Equipment
                  </Link>
                  <Link href="/services/medication-therapy-management" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b">
                    Medication Therapy Management
                  </Link>
                  <Link href="/services/long-term-care" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b">
                    Long Term Care
                  </Link>
                  <Link href="/services/medicare-open-enrollment" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b">
                    Medicare Open Enrollment
                  </Link>
                  <Link href="/services/multi-dose-packaging" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b">
                    Multi-Dose Packaging
                  </Link>
                  <Link href="/services/medication-synchronization" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    Medication Synchronization
                  </Link>
                </div>
              </div>

              <Link href="/immunizations" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium">
                Immunizations
              </Link>

              {/* LiveScan Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium flex items-center">
                  LiveScan
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link href="/livescan" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    LiveScan Services
                  </Link>
                </div>
              </div>

              <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium">
                Contact
              </Link>

              <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors font-medium">
                About
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link href="/refill" className="btn-secondary py-2 px-5">
                Refill Rx
              </Link>
              <Link href="/new-patient" className="btn-primary py-2 px-5">
                New Patient
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t">
              <nav className="flex flex-col space-y-2 mt-4">
                <Link href="/" className="px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg">
                  Home
                </Link>
                
                <div>
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg flex justify-between items-center"
                  >
                    Services
                    <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link href="/services/pharmacy" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">
                        Pharmacy Services
                      </Link>
                      <Link href="/services/medication-adherence" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">
                        Medication Adherence
                      </Link>
                      <Link href="/services/durable-medical-equipment" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">
                        Durable Medical Equipment
                      </Link>
                      <Link href="/services/medication-therapy-management" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">
                        Medication Therapy Management
                      </Link>
                      <Link href="/services/long-term-care" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">
                        Long Term Care
                      </Link>
                      <Link href="/services/medicare-open-enrollment" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">
                        Medicare Open Enrollment
                      </Link>
                      <Link href="/services/multi-dose-packaging" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">
                        Multi-Dose Packaging
                      </Link>
                      <Link href="/services/medication-synchronization" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">
                        Medication Synchronization
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/immunizations" className="px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg">
                  Immunizations
                </Link>

                <div>
                  <button 
                    onClick={() => setIsLiveScanOpen(!isLiveScanOpen)}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg flex justify-between items-center"
                  >
                    LiveScan
                    <svg className={`w-4 h-4 transition-transform ${isLiveScanOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isLiveScanOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link href="/livescan" className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg">
                        LiveScan Services
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/contact" className="px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg">
                  Contact
                </Link>

                <Link href="/about" className="px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg">
                  About
                </Link>

                <div className="pt-4 space-y-2">
                  <Link href="/refill" className="block text-center btn-secondary py-2">
                    Refill Rx
                  </Link>
                  <Link href="/new-patient" className="block text-center btn-primary py-2">
                    New Patient
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header

