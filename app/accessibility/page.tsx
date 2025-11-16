import Link from 'next/link'
import { CheckCircle, Mail, Phone } from 'lucide-react'

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Accessibility Statement</h1>
          <p className="text-xl text-primary-100">Our commitment to digital accessibility</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Commitment</h2>
              <p className="text-gray-600 mb-4">
                Anclote Pharmacy is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant 
                accessibility standards.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Conformance Status</h2>
              <p className="text-gray-600 mb-4">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. 
                These guidelines help make web content more accessible to people with disabilities.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Accessibility Features</h2>
              <p className="text-gray-600 mb-4">Our website includes the following accessibility features:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Semantic HTML structure for screen reader compatibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Keyboard navigation support throughout the site</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Clear and consistent navigation structure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Sufficient color contrast for readability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Descriptive link text and button labels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Responsive design for various screen sizes and devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Form labels and instructions clearly associated with inputs</span>
                </li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Physical Accessibility</h2>
              <p className="text-gray-600 mb-4">Our physical pharmacy location is accessible to all:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Wheelchair accessible entrance and parking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Wide aisles for easy navigation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Accessible restroom facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Staff available to assist customers</span>
                </li>
              </ul>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Assistive Services</h2>
              <p className="text-gray-600 mb-4">We offer the following assistive services:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Large print prescription labels available upon request</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Verbal prescription counseling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Delivery services for those unable to visit in person</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Multi-dose packaging to simplify medication management</span>
                </li>
              </ul>
            </div>

            <div className="card mb-8 bg-primary-50 border-2 border-primary-200">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Feedback and Contact</h2>
              <p className="text-gray-600 mb-6">
                We welcome your feedback on the accessibility of our website and services. If you encounter 
                any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:(727) 944-5800" className="text-primary-600 hover:text-primary-700">
                      (727) 944-5800
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@anclotepharmacy.com" className="text-primary-600 hover:text-primary-700">
                      info@anclotepharmacy.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary inline-block">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Ongoing Improvements</h2>
              <p className="text-gray-600">
                We are continuously working to improve the accessibility of our website and services. 
                We regularly review our accessibility practices and update our website to enhance the 
                experience for all users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

