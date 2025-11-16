import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">1933 N Pinellas Ave</p>
                  <p className="text-sm">Tarpon Springs, FL 34689</p>
                </div>
              </div>
              <a href="tel:727-944-5800" className="flex items-center space-x-3 hover:text-primary-400 transition-colors">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>(727) 944-5800</span>
              </a>
              <a href="mailto:info@anclotepharmacy.com" className="flex items-center space-x-3 hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>info@anclotepharmacy.com</span>
              </a>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-1" />
                <div className="text-sm">
                  <p>Mon-Fri: 9:00am - 5:00pm</p>
                  <p>Sat-Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/pharmacy" className="hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/immunizations" className="hover:text-primary-400 transition-colors">
                  Immunizations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/refill" className="hover:text-primary-400 transition-colors">
                  Refill Prescription
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/pharmacy" className="hover:text-primary-400 transition-colors">
                  Pharmacy Services
                </Link>
              </li>
              <li>
                <Link href="/services/medication-adherence" className="hover:text-primary-400 transition-colors">
                  Medication Adherence
                </Link>
              </li>
              <li>
                <Link href="/services/durable-medical-equipment" className="hover:text-primary-400 transition-colors">
                  Medical Equipment
                </Link>
              </li>
              <li>
                <Link href="/services/medication-therapy-management" className="hover:text-primary-400 transition-colors">
                  Therapy Management
                </Link>
              </li>
              <li>
                <Link href="/livescan" className="hover:text-primary-400 transition-colors">
                  LiveScan Fingerprinting
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Follow us on social media for health tips and updates</p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Leave a Review</h4>
              <p className="text-sm mb-3">Share your experience with us</p>
              <Link href="/reviews" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                Submit Review
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Anclote Pharmacy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-primary-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

