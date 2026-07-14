import { useState } from 'react'

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'residential',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create WhatsApp message
    const whatsappNumber = '919821859634'
    const message = `Hi Gaurav Agarwal, I'm interested in your interior design services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, '_blank')

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'residential',
      message: ''
    })

    // Close modal
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal active">
      <div className="modal-content">
        <div className="modal-header">
          <span>Get Free Consultation</span>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="projectType">Project Type *</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #bdc3c7',
                borderRadius: '5px',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="office">Office Space</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Send via WhatsApp</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>

        <p style={{ marginTop: '20px', fontSize: '0.85rem', color: '#7f8c8d', textAlign: 'center' }}>
          💬 You'll be connected directly on WhatsApp to discuss your project
        </p>
      </div>
    </div>
  )
}
