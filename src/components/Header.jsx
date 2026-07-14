export default function Header({ onContactClick }) {
  return (
    <header>
      <nav className="container">
        <div className="logo">JMD Interiorr</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><button onClick={onContactClick} className="btn" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>Get in Touch</button></li>
        </ul>
      </nav>
    </header>
  )
}
