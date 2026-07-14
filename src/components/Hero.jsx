export default function Hero({ onContactClick }) {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Transform Your Space</h1>
        <p>Premium interior design solutions for your home and office</p>
        <button onClick={onContactClick} className="cta-button">Start Your Project</button>
      </div>
    </section>
  )
}
