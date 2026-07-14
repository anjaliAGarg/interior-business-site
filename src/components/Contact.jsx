export default function Contact({ onContactClick }) {
  return (
    <section className="section" id="contact" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Get In Touch</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          Ready to transform your space? Contact JMD Interiorr today to discuss your project and get a free consultation.
        </p>
        <button onClick={onContactClick} className="btn" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>
          Fill Contact Form
        </button>
        <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div>
            <h3 style={{ color: '#d4a574', marginBottom: '10px' }}>📞 Phone</h3>
            <p>+91 9821859634</p>
          </div>
          <div>
            <h3 style={{ color: '#d4a574', marginBottom: '10px' }}>📧 Email</h3>
            <p>jmconstructions@gmail.com</p>
          </div>
          <div>
            <h3 style={{ color: '#d4a574', marginBottom: '10px' }}>📍 Address</h3>
            <p>D53-3F Basement SG City 81 Gurgaon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
