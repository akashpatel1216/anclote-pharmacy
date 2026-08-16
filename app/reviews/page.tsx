'use client'

import { useState } from 'react'
import { Star, Send } from 'lucide-react'

export default function ReviewsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '5',
    review: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your review! We appreciate your feedback.')
    setFormData({ name: '', email: '', rating: '5', review: '' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="page-heading">Leave a Review</h1>
            <p className="page-intro mb-8">
              Share your experience with Anclote Pharmacy
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card mb-12">
              <h2 className="compact-title mb-6">Submit Your Review</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control"
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

                <div>
                  <label htmlFor="rating" className="form-label">
                    Rating *
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                    className="form-control"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ (5 stars)</option>
                    <option value="4">⭐⭐⭐⭐ (4 stars)</option>
                    <option value="3">⭐⭐⭐ (3 stars)</option>
                    <option value="2">⭐⭐ (2 stars)</option>
                    <option value="1">⭐ (1 star)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="review" className="form-label">
                    Your Review *
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-control"
                    placeholder="Tell us about your experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Review
                </button>
              </form>
            </div>

            {/* External Review Links */}
            <div className="card tint-panel">
              <h3 className="text-xl font-semibold mb-4 text-slate-950">Leave a Review on Other Platforms</h3>
              <p className="body-copy mb-6">
                Help others find us by leaving a review on popular platforms:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#" 
                  className="btn-secondary text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Reviews
                </a>
                <a 
                  href="#" 
                  className="btn-secondary text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="btn-secondary text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yelp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

