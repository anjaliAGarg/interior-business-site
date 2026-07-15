import siteContent from '../content/siteContent.json'

export default function Services() {
  const { services } = siteContent

  return (
    <section className="section" id="services" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-title">{services.title}</h2>
        <div className="service-grid">
          {services.items.map((service, index) => (
            <div key={`${service.title}-${index}`} className="service-card">
              <div style={{ fontSize: '2.5rem', color: '#d4a574', marginBottom: '15px' }}>
                ✨
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
