'use client'

import { useState } from 'react'
import { Package, Phone, CheckCircle } from 'lucide-react'

export default function RefillPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    rxNumber: '',
    additionalRx: '',
    pickupDate: '',
    instructions: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Your refill request has been submitted! We will have it ready for pickup soon.')
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      phone: '',
      email: '',
      rxNumber: '',
      additionalRx: '',
      pickupDate: '',
      instructions: ''
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Refill Your Prescription</h1>
            <p className="text-xl text-primary-100 mb-8">
              Quick and easy prescription refill requests online
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Submit Request</h3>
                <p className="text-gray-600 text-sm">Fill out the form below with your prescription information</p>
              </div>

              <div className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">We'll Prepare It</h3>
                <p className="text-gray-600 text-sm">Our team will process your refill and call when ready</p>
              </div>

              <div className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Pick It Up</h3>
                <p className="text-gray-600 text-sm">Come by during business hours to collect your medication</p>
              </div>
            </div>

            {/* Refill Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Prescription Refill Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Prescription Information */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Prescription Information</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="rxNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Prescription (Rx) Number *
                      </label>
                      <input
                        type="text"
                        id="rxNumber"
                        name="rxNumber"
                        value={formData.rxNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="Enter Rx number from your prescription label"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        The Rx number can be found on your prescription bottle label
                      </p>
                    </div>

                    <div>
                      <label htmlFor="additionalRx" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Prescription Numbers (optional)
                      </label>
                      <input
                        type="text"
                        id="additionalRx"
                        name="additionalRx"
                        value={formData.additionalRx}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="Separate multiple Rx numbers with commas"
                      />
                    </div>

                    <div>
                      <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Pickup Date
                      </label>
                      <input
                        type="date"
                        id="pickupDate"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
                        Special Instructions or Questions (optional)
                      </label>
                      <textarea
                        id="instructions"
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="Any special requests or questions about your prescription"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
                  <p className="text-sm text-gray-700 mb-4">
                    By submitting this form, you authorize Anclote Pharmacy to refill the prescription(s) 
                    listed above. We will contact you when your prescription is ready for pickup.
                  </p>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Submit Refill Request
                  </button>
                </div>
              </form>
            </div>

            {/* Alternative Options */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Call for Refill</h3>
                <p className="text-gray-600 mb-4">
                  Prefer to speak with someone? Call us to request your refill.
                </p>
                <a 
                  href="tel:727-944-5800" 
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (727) 944-5800
                </a>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Transfer Prescription</h3>
                <p className="text-gray-600 mb-4">
                  Moving your prescription from another pharmacy?
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                >
                  Contact Us →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

