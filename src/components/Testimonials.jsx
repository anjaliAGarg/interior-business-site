export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: 'Amazing transformation! The team understood my vision perfectly and delivered beyond expectations.',
      author: 'Priya Sharma',
      rating: 5
    },
    {
      id: 2,
      text: 'Professional, timely, and affordable. Highly recommend for anyone looking to redesign their space.',
      author: 'Raj Kumar',
      rating: 5
    },
    {
      id: 3,
      text: 'They made my office look incredible. Great attention to detail and excellent customer service.',
      author: 'Neha Patel',
      rating: 5
    },
    {
      id: 4,
      text: 'Best interior design company in the city. Worth every penny for the quality and creativity.',
      author: 'Amit Singh',
      rating: 5
    }
  ]

  return (
    <section className="section" id="testimonials" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial">
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
