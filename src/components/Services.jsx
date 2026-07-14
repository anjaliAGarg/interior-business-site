export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Residential Design',
      description: 'Create beautiful and functional spaces for your home'
    },
    {
      id: 2,
      title: 'Commercial Spaces',
      description: 'Professional interior solutions for offices and retail'
    },
    {
      id: 3,
      title: 'Furniture & Decor',
      description: 'Curated furniture and decor selections for your style'
    },
    {
      id: 4,
      title: 'Space Planning',
      description: 'Optimize your space layout for maximum functionality'
    }
  ]

  return (
    <section className="section" id="services" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="service-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
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
