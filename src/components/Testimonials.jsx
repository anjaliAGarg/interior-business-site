import siteContent from '../content/siteContent.json'

export default function Testimonials() {
  const { testimonials } = siteContent

  return (
    <section className="section" id="testimonials" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-title">{testimonials.title}</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {testimonials.items.map((testimonial, index) => (
            <div key={`${testimonial.author}-${index}`} className="testimonial">
              <div className="testimonial-rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p>"{testimonial.text}"</p>
              <div className="testimonial-author">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
