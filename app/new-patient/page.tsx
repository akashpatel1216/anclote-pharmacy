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
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="page-heading">New Patient Registration</h1>
            <p className="page-intro mb-8">
              Welcome to Anclote Pharmacy! Let&apos;s get you started.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <UserPlus className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-950">Easy Process</h3>
                <p className="text-slate-600 text-sm">Simple registration form to get you started</p>
              </div>

              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <FileText className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-950">We&apos;ll Transfer</h3>
                <p className="text-slate-600 text-sm">We handle prescription transfers from other pharmacies</p>
              </div>

              <div className="card text-center">
                <div className="feature-icon mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-slate-950">Quick Setup</h3>
                <p className="text-slate-600 text-sm">Start using our services right away</p>
              </div>
            </div>

            {/* Registration Form */}
            <div className="card">
              <h2 className="compact-title mb-6">Patient Registration Form</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-950 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                    Personal Information
                  </h3>
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
                      <label htmlFor="gender" className="form-label">
                        Gender *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="form-control"
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
                  <h3 className="text-lg font-semibold mb-4 text-slate-950 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="address" className="form-label">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="form-control"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="city" className="form-label">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>

                      <div>
                        <label htmlFor="state" className="form-label">
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="form-control"
                          placeholder="FL"
                        />
                      </div>

                      <div>
                        <label htmlFor="zipCode" className="form-label">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                      <div>
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insurance Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-950 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                    Insurance Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="form-label">
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
                          <span className="body-copy">Yes</span>
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
                          <span className="body-copy">No</span>
                        </label>
                      </div>
                    </div>

                    {formData.hasInsurance === 'yes' && (
                      <>
                        <div>
                          <label htmlFor="insuranceCompany" className="form-label">
                            Insurance Company
                          </label>
                          <input
                            type="text"
                            id="insuranceCompany"
                            name="insuranceCompany"
                            value={formData.insuranceCompany}
                            onChange={handleChange}
                            className="form-control"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="policyNumber" className="form-label">
                              Policy/Member ID Number
                            </label>
                            <input
                              type="text"
                              id="policyNumber"
                              name="policyNumber"
                              value={formData.policyNumber}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>

                          <div>
                            <label htmlFor="groupNumber" className="form-label">
                              Group Number
                            </label>
                            <input
                              type="text"
                              id="groupNumber"
                              name="groupNumber"
                              value={formData.groupNumber}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Medical Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-950 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                    Medical Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="allergies" className="form-label">
                        Drug Allergies
                      </label>
                      <textarea
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        rows={3}
                        className="form-control"
                        placeholder="List any medication allergies or type 'None'"
                      />
                    </div>

                    <div>
                      <label htmlFor="currentMedications" className="form-label">
                        Current Medications
                      </label>
                      <textarea
                        id="currentMedications"
                        name="currentMedications"
                        value={formData.currentMedications}
                        onChange={handleChange}
                        rows={4}
                        className="form-control"
                        placeholder="List all medications you currently take (including over-the-counter)"
                      />
                    </div>
                  </div>
                </div>

                {/* Transfer Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-950 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                    Prescription Transfer (Optional)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="transferFrom" className="form-label">
                        Previous Pharmacy Name
                      </label>
                      <input
                        type="text"
                        id="transferFrom"
                        name="transferFrom"
                        value={formData.transferFrom}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Name and location of pharmacy"
                      />
                    </div>

                    <div>
                      <label htmlFor="transferPharmacyPhone" className="form-label">
                        Previous Pharmacy Phone
                      </label>
                      <input
                        type="tel"
                        id="transferPharmacyPhone"
                        name="transferPharmacyPhone"
                        value={formData.transferPharmacyPhone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-950 flex items-center">
                    <span className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                    Preferences
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="form-label">
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
                          <span className="body-copy">Phone</span>
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
                          <span className="body-copy">Email</span>
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
                          <span className="body-copy">Text</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="form-label">
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
                          <span className="body-copy">Yes</span>
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
                          <span className="body-copy">No</span>
                        </label>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">
                        Pick up all your medications on one convenient day each month
                      </p>
                    </div>

                    <div>
                      <label htmlFor="additionalNotes" className="form-label">
                        Additional Notes or Questions
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows={3}
                        className="form-control"
                        placeholder="Anything else we should know?"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="tint-panel rounded-2xl p-6">
                  <p className="text-sm text-slate-700 mb-4">
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

