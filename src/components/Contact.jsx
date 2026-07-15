import siteContent from '../content/siteContent.json'

export default function Contact({ onContactClick }) {
  const { contact, brand } = siteContent

  return (
    <section className="section" id="contact" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">{contact.title}</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
          {contact.description.replace('JMD Interiorr', brand.name)}
        </p>
        <button onClick={onContactClick} className="btn" style={{ fontSize: '1.1rem', padding: '15px 40px' }}>
          {contact.buttonLabel}
        </button>
        <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {contact.details.map((detail, index) => (
            <div key={`${detail.label}-${index}`}>
              <h3 style={{ color: '#d4a574', marginBottom: '10px' }}>{detail.label}</h3>
              <p>{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
