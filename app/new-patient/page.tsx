'use client'

import { useState } from 'react'
import { UserPlus, CheckCircle, FileText } from 'lucide-react'

export default function NewPatientPage() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    // Contact Information
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    // Insurance Information
    hasInsurance: 'yes',
    insuranceCompany: '',
    policyNumber: '',
    groupNumber: '',
    // Medical Information
    allergies: '',
    currentMedications: '',
    // Transfer Information
    transferFrom: '',
    transferPharmacyPhone: '',
    // Preferences
    preferredContactMethod: 'phone',
    medicationSync: 'no',
    additionalNotes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for choosing Anclote Pharmacy! We will contact you shortly to complete your registration.')
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      email: '',
      hasInsurance: 'yes',
      insuranceCompany: '',
      policyNumber: '',
      groupNumber: '',
      allergies: '',
      currentMedications: '',
      transferFrom: '',
      transferPharmacyPhone: '',
      preferredContactMethod: 'phone',
      medicationSync: 'no',
      additionalNotes: ''
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">New Patient Registration</h1>
            <p className="text-xl text-primary-100 mb-8">
              Welcome to Anclote Pharmacy! Let's get you started.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Easy Process</h3>
                <p className="text-gray-600 text-sm">Simple registration form to get you started</p>
              </div>

              <div className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">We'll Transfer</h3>
                <p className="text-gray-600 text-sm">We handle prescription transfers from other pharmacies</p>
              </div>

              <div className="card text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Quick Setup</h3>
                <p className="text-gray-600 text-sm">Start using our services right away</p>
              </div>
            </div>

            {/* Registration Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Patient Registration Form</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                    Personal Information
                  </h3>
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
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                        Gender *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        />
                      </div>

                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                          placeholder="FL"
                        />
                      </div>

                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insurance Information */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                    Insurance Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Do you have prescription insurance? *
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="hasInsurance"
                            value="yes"
                            checked={formData.hasInsurance === 'yes'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="hasInsurance"
                            value="no"
                            checked={formData.hasInsurance === 'no'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                    </div>

                    {formData.hasInsurance === 'yes' && (
                      <>
                        <div>
                          <label htmlFor="insuranceCompany" className="block text-sm font-medium text-gray-700 mb-2">
                            Insurance Company
                          </label>
                          <input
                            type="text"
                            id="insuranceCompany"
                            name="insuranceCompany"
                            value={formData.insuranceCompany}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700 mb-2">
                              Policy/Member ID Number
                            </label>
                            <input
                              type="text"
                              id="policyNumber"
                              name="policyNumber"
                              value={formData.policyNumber}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                            />
                          </div>

                          <div>
                            <label htmlFor="groupNumber" className="block text-sm font-medium text-gray-700 mb-2">
                              Group Number
                            </label>
                            <input
                              type="text"
                              id="groupNumber"
                              name="groupNumber"
                              value={formData.groupNumber}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Medical Information */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                    Medical Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-2">
                        Drug Allergies
                      </label>
                      <textarea
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="List any medication allergies or type 'None'"
                      />
                    </div>

                    <div>
                      <label htmlFor="currentMedications" className="block text-sm font-medium text-gray-700 mb-2">
                        Current Medications
                      </label>
                      <textarea
                        id="currentMedications"
                        name="currentMedications"
                        value={formData.currentMedications}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="List all medications you currently take (including over-the-counter)"
                      />
                    </div>
                  </div>
                </div>

                {/* Transfer Information */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                    Prescription Transfer (Optional)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="transferFrom" className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Pharmacy Name
                      </label>
                      <input
                        type="text"
                        id="transferFrom"
                        name="transferFrom"
                        value={formData.transferFrom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="Name and location of pharmacy"
                      />
                    </div>

                    <div>
                      <label htmlFor="transferPharmacyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Pharmacy Phone
                      </label>
                      <input
                        type="tel"
                        id="transferPharmacyPhone"
                        name="transferPharmacyPhone"
                        value={formData.transferPharmacyPhone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                    Preferences
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContactMethod"
                            value="phone"
                            checked={formData.preferredContactMethod === 'phone'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Phone</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContactMethod"
                            value="email"
                            checked={formData.preferredContactMethod === 'email'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Email</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContactMethod"
                            value="text"
                            checked={formData.preferredContactMethod === 'text'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Text</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interested in Medication Synchronization?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="medicationSync"
                            value="yes"
                            checked={formData.medicationSync === 'yes'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="medicationSync"
                            value="no"
                            checked={formData.medicationSync === 'no'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Pick up all your medications on one convenient day each month
                      </p>
                    </div>

                    <div>
                      <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes or Questions
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-900"
                        placeholder="Anything else we should know?"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
                  <p className="text-sm text-gray-700 mb-4">
                    By submitting this form, you consent to becoming a patient of Anclote Pharmacy and 
                    authorize us to process your prescription information. We will contact you to verify 
                    your information and complete your registration.
                  </p>
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Submit Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

