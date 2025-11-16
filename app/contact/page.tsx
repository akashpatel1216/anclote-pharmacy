'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you shortly.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100 mb-8">
              We're here to help! Reach out to us with any questions or concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  Visit us in person, give us a call, or send us a message. We're happy to assist you 
                  with all your pharmacy and healthcare needs.
                </p>
              </div>

              <div className="card">
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      1933 N Pinellas Ave<br />
                      Tarpon Springs, FL 34689
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start mb-4">
                  <Phone className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">Phone</h3>
                    <a href="tel:727-944-5800" className="text-primary-600 hover:text-primary-700 block">
                      (727) 944-5800
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start mb-4">
                  <Mail className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">Email</h3>
                    <a href="mailto:info@anclotepharmacy.com" className="text-primary-600 hover:text-primary-700">
                      info@anclotepharmacy.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start mb-4">
                  <Clock className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Hours</h3>
                    <div className="space-y-1 text-gray-600 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Monday - Friday:</span>
                        <span>9:00am - 5:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Saturday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="prescription">Prescription Question</option>
                        <option value="refill">Refill Request</option>
                        <option value="transfer">Transfer Prescription</option>
                        <option value="immunization">Immunization Appointment</option>
                        <option value="livescan">LiveScan Fingerprinting</option>
                        <option value="insurance">Insurance Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Find Us</h2>
            <div className="card overflow-hidden">
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-semibold mb-2">1933 N Pinellas Ave</p>
                  <p>Tarpon Springs, FL 34689</p>
                  <a 
                    href="https://maps.google.com/?q=1933+N+Pinellas+Ave+Tarpon+Springs+FL+34689"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

