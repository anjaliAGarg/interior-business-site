import siteContent from '../content/siteContent.json'

export default function Hero({ onContactClick }) {
  const { hero, brand } = siteContent

  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>{hero.title}</h1>
        <p>{hero.subtitle || brand.tagline}</p>
        <button onClick={onContactClick} className="cta-button">{hero.buttonLabel}</button>
      </div>
    </section>
  )
}
