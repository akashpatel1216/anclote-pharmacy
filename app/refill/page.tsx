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
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="page-heading">Refill Your Prescription</h1>
            <p className="page-intro mb-8">
              Quick and easy prescription refill requests online
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <Package className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-950">Submit Request</h3>
                <p className="text-slate-600 text-sm">Fill out the form below with your prescription information</p>
              </div>

              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <Phone className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-950">We&apos;ll Prepare It</h3>
                <p className="text-slate-600 text-sm">Our team will process your refill and call when ready</p>
              </div>

              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-950">Pick It Up</h3>
                <p className="text-slate-600 text-sm">Come by during business hours to collect your medication</p>
              </div>
            </div>

            {/* Refill Form */}
            <div className="card">
              <h2 className="compact-title mb-6">Prescription Refill Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-950">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="form-label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="form-label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="dateOfBirth" className="form-label">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                        className="form-control"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="email" className="form-label">
                      Email Address (optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Prescription Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-950">Prescription Information</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="rxNumber" className="form-label">
                        Prescription (Rx) Number *
                      </label>
                      <input
                        type="text"
                        id="rxNumber"
                        name="rxNumber"
                        value={formData.rxNumber}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Enter Rx number from your prescription label"
                      />
                      <p className="text-sm text-slate-500 mt-2">
                        The Rx number can be found on your prescription bottle label
                      </p>
                    </div>

                    <div>
                      <label htmlFor="additionalRx" className="form-label">
                        Additional Prescription Numbers (optional)
                      </label>
                      <input
                        type="text"
                        id="additionalRx"
                        name="additionalRx"
                        value={formData.additionalRx}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Separate multiple Rx numbers with commas"
                      />
                    </div>

                    <div>
                      <label htmlFor="pickupDate" className="form-label">
                        Preferred Pickup Date
                      </label>
                      <input
                        type="date"
                        id="pickupDate"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div>
                      <label htmlFor="instructions" className="form-label">
                        Special Instructions or Questions (optional)
                      </label>
                      <textarea
                        id="instructions"
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                        rows={4}
                        className="form-control"
                        placeholder="Any special requests or questions about your prescription"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="tint-panel rounded-2xl p-6">
                  <p className="text-sm text-slate-700 mb-4">
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
                <h3 className="text-xl font-semibold mb-3 text-slate-950">Call for Refill</h3>
                <p className="body-copy mb-4">
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
                <h3 className="text-xl font-semibold mb-3 text-slate-950">Transfer Prescription</h3>
                <p className="body-copy mb-4">
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

